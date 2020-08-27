import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import { Container, MainContent, BooksContainer } from './styles';
import api from '../../services/api';
import Header from '../../components/Header';

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

  useEffect(() => {
    api
      .get('books', {
        baseURL: 'https://bibleapi.co/api/',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRodSBBdWcgMjcgMjAyMCAxODo1MToxOCBHTVQrMDAwMC5rYWRvc2htdDJAZ21haWwuY29tIiwiaWF0IjoxNTk4NTU0Mjc4fQ.m5ruK1yd2OnOVy7whpFTZ368l3eHC7U7J1YdLwrBLLA',
        },
      })
      .then(response => {
        setBooks(response.data);
      });
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Harpa Cristã | Bíblia - Livros da Bíblia</title>
      </Helmet>
      <Header menuItem="biblia" />
      <MainContent>
        <h1>Biblia Sagrada</h1>

        <h2>Velho Testamento</h2>
        <BooksContainer>
          {books
            .filter(item => item.testament === 'VT')
            .map((book: Books) => (
              <Link
                key={book.abbrev.pt}
                to={`/biblia/${book.testament}/${book.abbrev.pt}/1`}
              >
                <div>{book.name}</div>
              </Link>
            ))}
        </BooksContainer>

        <h2>Novo Testamento</h2>

        <BooksContainer>
          {books
            .filter(item => item.testament === 'NT')
            .map((book: Books) => (
              <Link
                key={book.abbrev.pt}
                to={`/biblia/${book.testament}/${book.abbrev.pt}/1`}
              >
                <div>{book.name}</div>
              </Link>
            ))}
        </BooksContainer>
      </MainContent>
    </Container>
  );
};

export default Biblia;
