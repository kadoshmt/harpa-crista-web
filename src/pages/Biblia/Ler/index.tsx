import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Container, BookInfo, BookContainer, ChapterContainer } from './styles';
import api from '../../../services/api';

import BackButton from '../../../components/BackButton';
import MainLayout from '../../../layouts/MainLayout';
import Loading from '../../../components/Loading';

interface Verse {
  number: number;
  text: string;
}

interface Book {
  book: {
    abbrev: {
      pt: string;
      en: string;
    };
    author: string;
    group: string;
    name: string;
    testament: string;
    version: string;
  };

  chapter: {
    number: number;
    verses: number;
  };

  verses: Verse[];
}

const LerBiblia: React.FC = () => {
  const [book, setBook] = useState<Book>();
  const [numChapters, setNumChapters] = useState<Number>(0);
  const { abbrev, testament } = useParams();
  const { chapter } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    api
      .get(`verses/acf/${abbrev}/${chapter}`, {
        baseURL: 'https://bibleapi.co/api/',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRodSBBdWcgMjcgMjAyMCAxODo1MToxOCBHTVQrMDAwMC5rYWRvc2htdDJAZ21haWwuY29tIiwiaWF0IjoxNTk4NTU0Mjc4fQ.m5ruK1yd2OnOVy7whpFTZ368l3eHC7U7J1YdLwrBLLA',
        },
      })
      .then(response => {
        setBook(response.data);
        setIsLoaded(true);
      });

    api
      .get(`books/${abbrev}`, {
        baseURL: 'https://bibleapi.co/api/',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRodSBBdWcgMjcgMjAyMCAxODo1MToxOCBHTVQrMDAwMC5rYWRvc2htdDJAZ21haWwuY29tIiwiaWF0IjoxNTk4NTU0Mjc4fQ.m5ruK1yd2OnOVy7whpFTZ368l3eHC7U7J1YdLwrBLLA',
        },
      })
      .then(response => {
        setNumChapters(response.data.chapters || 0);
      });
  }, [abbrev, chapter]);

  const checkPrevUrl = useMemo(() => {
    return book && book.chapter.number > 1;
  }, [book]);

  const checkNextUrl = useMemo(() => {
    return book && numChapters && book?.chapter.number < numChapters;
  }, [book, numChapters]);

  return (
    <MainLayout
      menuItem="biblia"
      metaTitle={`Harpa Cristã | Bíblia - ${book && book.book.name}`}
    >
      <h1>Biblia Sagrada</h1>
      {!isLoaded && <Loading />}
      {isLoaded && (
        <Container>
          <h2>
            {' '}
            {book && book.book.name} {book && book.chapter.number}
          </h2>

          <BookInfo>
            <dt>Author do livro:</dt>
            <dd>{book && book.book.author}</dd>
            <dt>Categoria:</dt>
            <dd>{book && book.book.group}</dd>
            {numChapters && (
              <>
                <dt>Total de Capítulos:</dt>
                <dd>{numChapters}</dd>
              </>
            )}
          </BookInfo>

          <BookContainer>
            {checkPrevUrl && (
              <Link
                to={`/biblia/${testament}/${abbrev}/${
                  book && book.chapter.number - 1
                }`}
                className="prevButton"
              >
                <FiChevronLeft size={30} />
              </Link>
            )}

            <ChapterContainer>
              {book &&
                book.verses.map((verse: Verse) => (
                  <p key={verse.number}>
                    <em>{verse.number}</em> {verse.text}
                  </p>
                ))}
            </ChapterContainer>

            {checkNextUrl && (
              <Link
                to={`/biblia/${testament}/${abbrev}/${
                  book && book.chapter.number + 1
                }`}
                className="prevButton"
              >
                <FiChevronRight size={30} />
              </Link>
            )}
          </BookContainer>
          <BackButton url="/biblia" />
        </Container>
      )}
    </MainLayout>
  );
};

export default LerBiblia;
