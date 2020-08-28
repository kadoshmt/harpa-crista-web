import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './styles';
import api from '../../services/api';

import HimnsList from '../../components/HimnsList';
import HymnsMenu from '../../components/HymnsMenu';
import MainLayout from '../../layouts/MainLayout';
import HymnsPagination from '../../components/HymnsPagination';

const Hinos: React.FC = () => {
  const [hymns, setHymns] = useState([]);

  const { page } = useParams();
  const pageParam = page || 1;

  useEffect(() => {
    api
      .get('/hymns', {
        params: {
          page: pageParam,
          perPage: 100,
        },
      })
      .then(response => {
        setHymns(response.data);
      });
  }, [pageParam]);

  return (
    <MainLayout menuItem="hinos" metaTitle="Harpa Cristã | Hinos">
      <Container>
        <h1>Hinos</h1>

        <HymnsMenu />
        <HymnsPagination styles={{ marginBottom: '6rem' }} page={pageParam} />

        <div>
          <HimnsList hymns={hymns} />
        </div>

        <HymnsPagination styles={{ marginTop: '6rem' }} page={pageParam} />
      </Container>
    </MainLayout>
  );
};

export default Hinos;
