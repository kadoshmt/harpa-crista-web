import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, BooksContainer, Book } from './styles';

import MainLayout from '../../layouts/MainLayout';
import Loading from '../../components/Loading';

interface Books {
  abbrev: {
    pt: string;
    en: string;
  };
  author: string;
  chapters: number;
  group: string;
  name: string;
  testament: string;
}

const Biblia: React.FC = () => {
  const [books, setBooks] = useState<Books[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    api
      .get('books', {
        baseURL: 'https://bibleapi.co/api/',
        headers: {
          Authorization: process.env.REACT_APP_BIBLE_API_KEY,
        },
      })
      .then(response => {
        setBooks(response.data);
        setIsLoaded(true);
      });
  }, []);

  return (
    <MainLayout
      menuItem="biblia"
      metaTitle="Harpa Cristã | Bíblia - Livros da Bíblia"
    >
      <h1>Biblia Sagrada</h1>
      {!isLoaded && <Loading />}
      {isLoaded && (
        <Container>
          <h2>Velho Testamento</h2>
          <BooksContainer>
            {books
              .filter(item => item.testament === 'VT')
              .map((book: Books) => (
                <Book>
                  <Link
                    key={book.abbrev.pt}
                    to={`/biblia/${book.testament}/${book.abbrev.pt}/1`}
                  >
                    <div>{book.name}</div>
                  </Link>
                </Book>
              ))}
          </BooksContainer>

          <h2>Novo Testamento</h2>

          <BooksContainer>
            {books
              .filter(item => item.testament === 'NT')
              .map((book: Books) => (
                <Book>
                  <Link
                    key={book.abbrev.pt}
                    to={`/biblia/${book.testament}/${book.abbrev.pt}/1`}
                  >
                    <div>{book.name}</div>
                  </Link>
                </Book>
              ))}
          </BooksContainer>
        </Container>
      )}
    </MainLayout>
  );
};

export default Biblia;
