import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, ResultInfo, CategoriesContainer } from './styles';
import api from '../../../services/api';

import HymnsMenu from '../../../components/HymnsMenu';
import MainLayout from '../../../layouts/MainLayout';

interface Categories {
  id: number;
  title: string;
  slug: string;
}

const Categorias: React.FC = () => {
  const [categories, setCategories] = useState<Categories[]>([]);

  useEffect(() => {
    api.get('/hymns-categories').then(response => {
      setCategories(response.data);
    });
  }, []);

  return (
    <MainLayout menuItem="hinos" metaTitle="Harpa Cristã | Categorias de Hinos">
      <Container>
        <h1>Categorias de Hinos</h1>

        <HymnsMenu menuItem="categorias" />

        <ResultInfo>
          Foram encontradas {categories && categories.length} categorias.
        </ResultInfo>
        <CategoriesContainer>
          {categories.map((category: Categories) => (
            <Link
              key={category.id}
              to={`/hinos/categoria/${category.id}/${category.slug}`}
            >
              <div>{category.title}</div>
            </Link>
          ))}
        </CategoriesContainer>
      </Container>
    </MainLayout>
  );
};

export default Categorias;
