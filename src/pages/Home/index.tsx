import React, { useCallback, useRef, ChangeEvent, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { Container } from './styles';
import api from '../../services/api';
import Header from '../../components/Header';
import { useTheme } from '../../hooks/theme';
import { useAuth } from '../../hooks/auth';

const Home: React.FC = () => {
  const history = useHistory();
  const { toggleTheme } = useTheme();

  return (
    <Container>
      <Header toggleTheme={toggleTheme} />
    </Container>
  );
};

export default Home;
