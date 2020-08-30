import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './styles';
import api from '../../services/api';

import HymnsList from '../../components/HymnsList';
import HymnsMenu from '../../components/HymnsMenu';
import MainLayout from '../../layouts/MainLayout';
import HymnsPagination from '../../components/HymnsPagination';
import Loading from '../../components/Loading';

const Hinos: React.FC = () => {
  const [hymns, setHymns] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

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
        setIsLoaded(true);
      });
  }, [pageParam]);

  return (
    <MainLayout menuItem="hinos" metaTitle="Harpa Cristã | Hinos">
      <h1>Hinos</h1>
      <Container>
        <HymnsMenu />
        {!isLoaded && <Loading />}
        {isLoaded && (
          <>
            <HymnsPagination
              styles={{ marginBottom: '6rem' }}
              page={pageParam}
            />

            <div>
              <HymnsList hymns={hymns} />
            </div>

            <HymnsPagination styles={{ marginTop: '6rem' }} page={pageParam} />
          </>
        )}
      </Container>
    </MainLayout>
  );
};

export default Hinos;
