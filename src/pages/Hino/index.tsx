import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Container, MainContent, HymnContainer, HymnBody } from './styles';
import api from '../../services/api';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';

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

  const { id } = useParams();

  useEffect(() => {
    api.get(`/hymns/${id}`).then(response => {
      setHymn(response.data);
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

  return (
    <Container>
      <Header menuItem="hinos" />

      <Helmet>
        <title>{`Harpa Cristã | ${hymn && hymn.title}`}</title>
      </Helmet>
      <MainContent>
        <h1>Hino</h1>

        <h2>
          {hymn && hymn.num_hymn.toString().padStart(3, '0')} -{' '}
          {hymn && hymn.title}
        </h2>

        <h3>
          {hymn && hymn.authors.flatMap(author => author.name).join(' / ')}
        </h3>

        <HymnContainer>
          {prevHymn && (
            <Link to={prevUrl} className="prevButton">
              <FiChevronLeft size={30} />
            </Link>
          )}

          {hymn && <HymnBody dangerouslySetInnerHTML={{ __html: hymn.body }} />}

          {nextHymn && (
            <Link to={nextUrl} className="nextButton">
              <FiChevronRight size={30} />
            </Link>
          )}
        </HymnContainer>
        <BackButton />
      </MainContent>
    </Container>
  );
};

export default Hino;
