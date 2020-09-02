import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Container, ResultInfo, HymnContainer, HymnBody } from './styles';
import api from '../../services/api';

import BackButton from '../../components/BackButton';
import MainLayout from '../../layouts/MainLayout';
import Loading from '../../components/Loading';

interface Authors {
  initials: string;
  name: string;
}

interface Hymn {
  id: number;
  num_hymn: number;
  title: string;
  body: string;
  slug: string;
  authors: Authors[];
}

const Hino: React.FC = () => {
  const [hymn, setHymn] = useState<Hymn>();
  const [prevHymn, setPrevHymn] = useState<Hymn>();
  const [nextHymn, setNextHymn] = useState<Hymn>();
  const [isLoaded, setIsLoaded] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    api.get(`/hymns/${id}`).then(response => {
      setHymn(response.data);
      setIsLoaded(true);
      window.scrollTo(0, 0); // fix: render page on top for mobile
    });

    const prevId = Number(id) - 1;
    api.get(`/hymns/${prevId}`).then(response => {
      setPrevHymn(response.data);
    });

    const nextId = Number(id) + 1;
    api.get(`/hymns/${nextId}`).then(response => {
      setNextHymn(response.data);
    });
  }, [id]);

  const prevUrl = useMemo(() => {
    return prevHymn ? `/hino/${prevHymn.num_hymn}/${prevHymn.slug}` : '';
  }, [prevHymn]);

  const nextUrl = useMemo(() => {
    return nextHymn ? `/hino/${nextHymn.num_hymn}/${nextHymn.slug}` : '';
  }, [nextHymn]);

  const titleWithNumber = useMemo(() => {
    return hymn
      ? `${hymn.num_hymn.toString().padStart(3, '0')} - ${hymn.title}`
      : '';
  }, [hymn]);

  return (
    <MainLayout
      menuItem="hinos"
      metaTitle={`Harpa Cristã | ${titleWithNumber}`}
    >
      {!isLoaded && <Loading />}
      {isLoaded && (
        <Container>
          <h1>{titleWithNumber}</h1>

          <ResultInfo>
            {hymn && hymn.authors.flatMap(author => author.name).join(' / ')}
          </ResultInfo>

          <HymnContainer>
            {prevHymn && (
              <Link to={prevUrl} className="prevButton">
                <FiChevronLeft size={30} />
              </Link>
            )}

            {hymn && (
              <HymnBody dangerouslySetInnerHTML={{ __html: hymn.body }} />
            )}

            {nextHymn && (
              <Link to={nextUrl} className="nextButton">
                <FiChevronRight size={30} />
              </Link>
            )}
          </HymnContainer>
          <BackButton />
        </Container>
      )}
    </MainLayout>
  );
};

export default Hino;
