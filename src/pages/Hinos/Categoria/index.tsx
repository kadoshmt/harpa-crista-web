import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import { Container, MainContent } from './styles';
import api from '../../../services/api';
import Header from '../../../components/Header';
import HimnsList from '../../../components/HimnsList';
import BackButton from '../../../components/BackButton';

interface Hymn {
  id: number;
  num_hymn: number;
  title: string;
  slug: string;
}

interface Category {
  id: number;
  title: string;
  slug: string;
  total_hymns: number;
  hymns: Hymn[];
}

const Categoria: React.FC = () => {
  const [category, setCategory] = useState<Category>();

  const { id } = useParams();

  useEffect(() => {
    api.get(`/hymns-categories/${id}`).then(response => {
      setCategory(response.data);
    });
  }, [id]);

  return (
    <Container>
      <Header menuItem="hinos" />

      <Helmet>
        <title>{`Harpa Cristã | ${category && category.title}`}</title>
      </Helmet>
      <MainContent>
        <h1>Hinos por Categoria</h1>

        <h2>{category && category.title}</h2>

        <h3>
          Foram encontradas {category && category.total_hymns} hinos para esta
          categoria.
        </h3>

        {category && <HimnsList hymns={category.hymns} />}
        <BackButton />
      </MainContent>
    </Container>
  );
};

export default Categoria;
