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

interface Category {
  id: number;
  title: string;
  slug: string;
  total_hymns: number;
  hymns: Hymn[];
}

const Categoria: React.FC = () => {
  const [category, setCategory] = useState<Category>();
  const [isLoaded, setIsLoaded] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    api.get(`/hymns-categories/${id}`).then(response => {
      setCategory(response.data);
      setIsLoaded(true);
    });
  }, [id]);

  return (
    <MainLayout
      menuItem="hinos"
      metaTitle={`Harpa Cristã | ${category && category.title}`}
    >
      {!isLoaded && <Loading />}
      {isLoaded && (
        <Container>
          <h1>{category && category.title}</h1>

          <ResultInfo>
            Foram encontradas{' '}
            <mark>{category && category.total_hymns} hinos</mark> para esta
            categoria.
          </ResultInfo>

          <HymnsContainer>
            {category && <HymnsList hymns={category.hymns} />}
          </HymnsContainer>

          <BackButton />
        </Container>
      )}
    </MainLayout>
  );
};

export default Categoria;
