import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import { Container, MainContent } from './styles';
import api from '../../services/api';
import Header from '../../components/Header';
import HimnsList from '../../components/HimnsList';
import BackButton from '../../components/BackButton';

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
      });
  }, [page, words]);

  return (
    <Container>
      <Header menuItem="hinos" />

      <Helmet>
        <title>{`Harpa Cristã | Busca por ${words}`}</title>
      </Helmet>
      <MainContent>
        <h1>Buscar</h1>

        <h2>Resultado da Busca</h2>

        <h3>
          Foram encontradas {hymns.length} hinos para o termo{' '}
          <strong>&ldquo;{words}&ldquo;</strong>.
        </h3>

        <div>
          <HimnsList hymns={hymns} />
        </div>
      </MainContent>
    </Container>
  );
};

export default Buscar;
