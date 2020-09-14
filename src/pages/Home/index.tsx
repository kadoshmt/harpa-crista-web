import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { Container } from './styles';
import api from '../../services/api';

import MainLayout from '../../layouts/MainLayout';
import Loading from '../../components/Loading';
import HymnsListOrdered from '../../components/HymnsListOrdered';
// import HomeSlider from '../../components/HomeSlider';

const Home: React.FC = () => {
  const [hymns, setHymns] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { page } = useParams();
  const pageParam = page || 1;

  useEffect(() => {
    api
      .get('/hymns', {
        params: {
          page: pageParam,
          perPage: 30,
          orderBy: 'views,DESC',
        },
      })
      .then(response => {
        setHymns(response.data);
        setIsLoaded(true);
      });
  }, [pageParam]);

  return (
    <MainLayout menuItem="home" metaTitle="Harpa Cristã | Página Inicial">
      {!isLoaded && <Loading />}
      {isLoaded && (
        <Container>
          <div>
            <HymnsListOrdered hymns={hymns} />
          </div>
        </Container>
      )}
    </MainLayout>
  );
};

export default Home;
