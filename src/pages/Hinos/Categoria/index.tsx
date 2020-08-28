import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container, ResultInfo } from './styles';
import api from '../../../services/api';

import HimnsList from '../../../components/HimnsList';
import BackButton from '../../../components/BackButton';
import MainLayout from '../../../layouts/MainLayout';

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
    <MainLayout
      menuItem="hinos"
      metaTitle={`Harpa Cristã | ${category && category.title}`}
    >
      <Container>
        <h1>Hinos por Categoria</h1>

        <h2>{category && category.title}</h2>

        <ResultInfo>
          Foram encontradas {category && category.total_hymns} hinos para esta
          categoria.
        </ResultInfo>

        {category && <HimnsList hymns={category.hymns} />}
        <BackButton />
      </Container>
    </MainLayout>
  );
};

export default Categoria;
