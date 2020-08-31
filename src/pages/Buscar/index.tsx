import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Container, ResultInfo } from './styles';
import api from '../../services/api';

import HymnsList from '../../components/HymnsList';
import MainLayout from '../../layouts/MainLayout';
import Loading from '../../components/Loading';

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

const Buscar: React.FC = () => {
  const [hymns, setHymns] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const query = new URLSearchParams(useLocation().search);

  const page = query.get('pagina') || 1;
  const words = query.get('termo') || '';

  useEffect(() => {
    api
      .get('/hymns', {
        params: {
          page,
          perPage: 640,
          words,
        },
      })
      .then(response => {
        setHymns(response.data);
        setIsLoaded(true);
        window.scrollTo(0, 0); // fix: render page on top for mobile
      });
  }, [page, words]);

  return (
    <MainLayout
      menuItem="hinos"
      metaTitle={`Harpa Cristã | Busca por ${words}`}
    >
      {!isLoaded && <Loading />}
      {isLoaded && (
        <Container>
          <h1>Resultado da Busca</h1>

          <ResultInfo>
            Foram encontradas {hymns.length} hinos para o termo{' '}
            <mark>&ldquo;{words}&ldquo;</mark>.
          </ResultInfo>

          <div>
            <HymnsList hymns={hymns} />
          </div>
        </Container>
      )}
    </MainLayout>
  );
};

export default Buscar;
