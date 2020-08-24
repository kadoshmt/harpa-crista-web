import React from 'react';
// import { useHistory, Link } from 'react-router-dom';

import { Container, HeaderContent } from './styles';
// import api from '../../services/api';
import Header from '../../components/Header';
import { useTheme } from '../../hooks/theme';
// import { useAuth } from '../../hooks/auth';

const Hino: React.FC = () => {
  // const history = useHistory();
  const { toggleTheme } = useTheme();

  return (
    <Container>
      <Header toggleTheme={toggleTheme} />
      <HeaderContent>
        <h1>Hino</h1>
      </HeaderContent>
    </Container>
  );
};

export default Hino;
