import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container, ResultInfo, HymnsContainer } from './styles';
import api from '../../../services/api';

import HymnsList from '../../../components/HymnsList';
import BackButton from '../../../components/BackButton';
import MainLayout from '../../../layouts/MainLayout';
import Loading from '../../../components/Loading';

interface Hymn {
  id: number;
  num_hymn: number;
  title: string;
  slug: string;
}

interface Author {
  id: number;
  name: string;
  slug: string;
  initials: string;
  total_hymns: number;
  hymns: Hymn[];
}

const Autor: React.FC = () => {
  const [author, setAuthor] = useState<Author>();
  const [isLoaded, setIsLoaded] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    api.get(`/hymns-authors/${id}`).then(response => {
      setAuthor(response.data);
      setIsLoaded(true);
    });
  }, [id]);

  return (
    <MainLayout
      menuItem="hinos"
      metaTitle={`Harpa Cristã | ${author && author.name}`}
    >
      {!isLoaded && <Loading />}
      {isLoaded && (
        <Container>
          <h1>
            {author && author.name} - {author && author.initials}
          </h1>

          <ResultInfo>
            Este autor(a) compôs/traduziu{' '}
            <mark>{author && author.total_hymns} hinos</mark>.
          </ResultInfo>

          <HymnsContainer>
            {author && <HymnsList hymns={author.hymns} author={author.name} />}
          </HymnsContainer>
          <BackButton />
        </Container>
      )}
    </MainLayout>
  );
};

export default Autor;
