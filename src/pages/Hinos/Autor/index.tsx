import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import { Container, ResultInfo } from './styles';
import api from '../../../services/api';
import Header from '../../../components/Header';
import HimnsList from '../../../components/HimnsList';
import BackButton from '../../../components/BackButton';
import MainLayout from '../../../layouts/MainLayout';

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
    <MainLayout
      menuItem="hinos"
      metaTitle={`Harpa Cristã | ${author && author.name}`}
    >
      <Container>
        <h1>Hinos por Autores</h1>

        <h2>
          {author && author.name} - {author && author.initials}
        </h2>

        <ResultInfo>
          Este autor(a) compôs/traduziu {author && author.total_hymns} hinos.
        </ResultInfo>

        {author && <HimnsList hymns={author.hymns} author={author.name} />}
        <BackButton />
      </Container>
    </MainLayout>
  );
};

export default Autor;
