import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, ResultInfo, AuthorsContainer } from './styles';
import api from '../../../services/api';

import HymnsMenu from '../../../components/HymnsMenu';
import MainLayout from '../../../layouts/MainLayout';

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
    <MainLayout
      menuItem="hinos"
      metaTitle=">Harpa Cristã | Autores e Tradutores"
    >
      <Container>
        <h1>Autores e Tradutores</h1>
        <HymnsMenu menuItem="autores" />
        <ResultInfo>
          Foram encontrados {authors && authors.length} autores.
        </ResultInfo>
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
      </Container>
    </MainLayout>
  );
};

export default Autores;
