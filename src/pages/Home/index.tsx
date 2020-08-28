import React from 'react';
// import { useHistory, Link } from 'react-router-dom';

import { Container } from './styles';
// import api from '../../services/api';

import MainLayout from '../../layouts/MainLayout';
// import { useAuth } from '../../hooks/auth';

const Home: React.FC = () => {
  // const history = useHistory();

  return (
    <MainLayout menuItem="home" metaTitle="Harpa Cristã | Página Inicial">
      <h1>Página Inicial</h1>
      <Container>Teste</Container>
    </MainLayout>
  );
};

export default Home;
