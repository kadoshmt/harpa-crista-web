import React from 'react';
// import { useHistory, Link } from 'react-router-dom';

import { Container, HeaderContent } from './styles';
// import api from '../../services/api';
import Header from '../../components/Header';
// import { useAuth } from '../../hooks/auth';

const Home: React.FC = () => {
  // const history = useHistory();

  return (
    <Container>
      <Header menuItem="home" />
      <HeaderContent>
        <h1>Página Inicial</h1>
      </HeaderContent>
    </Container>
  );
};

export default Home;
