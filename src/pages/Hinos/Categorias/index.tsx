import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, ResultInfo, CategoriesContainer, Category } from './styles';
import api from '../../../services/api';

import HymnsMenu from '../../../components/HymnsMenu';
import MainLayout from '../../../layouts/MainLayout';
import Loading from '../../../components/Loading';

interface Categories {
  id: number;
  title: string;
  slug: string;
}

const Categorias: React.FC = () => {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    api.get('/hymns-categories').then(response => {
      setCategories(response.data);
      setIsLoaded(true);
    });
  }, []);

  return (
    <MainLayout menuItem="hinos" metaTitle="Harpa Cristã | Categorias de Hinos">
      <Container>
        <h1>Categorias de Hinos</h1>

        <HymnsMenu menuItem="categorias" />

        {!isLoaded && <Loading />}
        {isLoaded && (
          <>
            <ResultInfo>
              Foram encontradas{' '}
              <mark>{categories && categories.length} categorias</mark>.
            </ResultInfo>
            <CategoriesContainer>
              {categories.map((category: Categories) => (
                <Link
                  key={category.id}
                  to={`/hinos/categoria/${category.id}/${category.slug}`}
                >
                  <Category>{category.title}</Category>
                </Link>
              ))}
            </CategoriesContainer>
          </>
        )}
      </Container>
    </MainLayout>
  );
};

export default Categorias;
