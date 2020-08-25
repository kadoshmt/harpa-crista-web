import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import { Container, MainContent, HymnsContainer } from './styles';
import api from '../../../services/api';
import Header from '../../../components/Header';
import HimnsList from '../../../components/HimnsList';

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

  const { id } = useParams();

  useEffect(() => {
    api.get(`/hymns-authors/${id}`).then(response => {
      setAuthor(response.data);
    });
  }, [id]);

  return (
    <Container>
      <Header menuItem="hinos" />

      <Helmet>
        <title>{`Harpa Cristã | ${author && author.name}`}</title>
      </Helmet>
      <MainContent>
        <h1>Hinos por Autores</h1>

        <h2>
          {author && author.name} - {author && author.initials}
        </h2>

        <h3>
          Este autor(a) compôs/traduziu {author && author.total_hymns} hinos.
        </h3>

        {author && <HimnsList hymns={author.hymns} author={author.name} />}
      </MainContent>
    </Container>
  );
};

export default Autor;
