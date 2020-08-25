import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import { Container, MainContent, AuthorsContainer } from './styles';
import api from '../../../services/api';
import Header from '../../../components/Header';

interface Author {
  id: number;
  name: string;
  slug: string;
  initials: string;
}

const Autores: React.FC = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    api.get('/hymns-authors').then(response => {
      setAuthors(response.data);
    });
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Harpa Cristã | Autores e Tradutores</title>
      </Helmet>
      <Header menuItem="hinos" />
      <MainContent>
        <h1>Autores e Tradutores</h1>
        <AuthorsContainer>
          {authors.map((author: Author) => (
            <Link
              key={author.id}
              to={`/hinos/autor/${author.id}/${author.slug}`}
            >
              <div>
                {author.name} - {author.initials}
              </div>
            </Link>
          ))}
        </AuthorsContainer>
      </MainContent>
    </Container>
  );
};

export default Autores;
