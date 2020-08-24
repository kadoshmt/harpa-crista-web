import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Container, MainContent, HymnsPagination } from './styles';
import api from '../../services/api';
import Header from '../../components/Header';
import { useTheme } from '../../hooks/theme';
import HimnsList from '../../components/HimnsList';

const Hinos: React.FC = () => {
  const [hymns, setHymns] = useState([]);
  const { toggleTheme } = useTheme();

  const { page } = useParams();

  useEffect(() => {
    const pageParam = page || 1;
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
  }, [page]);

  return (
    <Container>
      <Header toggleTheme={toggleTheme} />
      <MainContent>
        <h1>Hinos</h1>
        <HymnsPagination style={{ marginBottom: '6rem' }}>
          <ul>
            <li>
              <Link to="/hinos">1</Link>
            </li>
            <li>
              <Link to="/hinos/2">101</Link>
            </li>
            <li>
              <Link to="/hinos/3">201</Link>
            </li>
            <li>
              <Link to="/hinos/4">301</Link>
            </li>
            <li>
              <Link to="/hinos/5">401</Link>
            </li>
            <li>
              <Link to="/hinos/6">501</Link>
            </li>
            <li>
              <Link to="/hinos/7">601</Link>
            </li>
          </ul>
        </HymnsPagination>
        <div>
          <HimnsList hymns={hymns} />
        </div>
        <HymnsPagination style={{ marginTop: '3rem' }}>
          <ul>
            <li>
              <Link to="/hinos">1</Link>
            </li>
            <li>
              <Link to="/hinos/2">101</Link>
            </li>
            <li>
              <Link to="/hinos/3">201</Link>
            </li>
            <li>
              <Link to="/hinos/4">301</Link>
            </li>
            <li>
              <Link to="/hinos/5">401</Link>
            </li>
            <li>
              <Link to="/hinos/6">501</Link>
            </li>
            <li>
              <Link to="/hinos/7">601</Link>
            </li>
          </ul>
        </HymnsPagination>
      </MainContent>
    </Container>
  );
};

export default Hinos;
