import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import { Container, MainContent, CategoriesContainer } from './styles';
import api from '../../../services/api';
import Header from '../../../components/Header';
import HymnsMenu from '../../../components/HymnsMenu';

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
    <Container>
      <Helmet>
        <title>Harpa Cristã | Categorias de Hinos</title>
      </Helmet>
      <Header menuItem="hinos" />
      <MainContent>
        <h1>Categorias de Hinos</h1>

        <HymnsMenu menuItem="categorias" />

        <h3>Foram encontradas {categories && categories.length} categorias.</h3>
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
      </MainContent>
    </Container>
  );
};

export default Categorias;
