import React, { useState, useEffect } from 'react';

import { Container, ResultInfo, HymnsContainer } from './styles';
import HymnsMenu from '../../../components/HymnsMenu';

import HymnsList from '../../../components/HymnsList';
import BackButton from '../../../components/BackButton';
import MainLayout from '../../../layouts/MainLayout';
import Loading from '../../../components/Loading';

interface Hymn {
  id: number;
  num_hymn: number;
  title: string;
  slug: string;
  author?: { name: string }[];
}

interface FavoriteHymn {
  id: number;
  title: string;
  slug: string;
  author: string;
}

const Favoritos: React.FC = () => {
  const [hymns, setHymns] = useState<Hymn[]>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const favoritesData = sessionStorage.getItem('@HarpaCrista:favorites');
    const favorites = favoritesData ? JSON.parse(favoritesData) : null;

    if (favorites) {
      const newFavorites = favorites.map((item: FavoriteHymn) => {
        const author = [{ name: item.author }];

        const data: Hymn = {
          id: item.id,
          num_hymn: item.id,
          title: item.title,
          slug: item.slug,
          author,
        };
        return data;
      });

      // Ordena registros em ordem ascendente
      const sortedFavorites = newFavorites.sort((a: Hymn, b: Hymn) =>
        a.id < b.id ? -1 : 1,
      );

      setHymns(sortedFavorites);
    }

    setIsLoaded(true);
  }, []);

  return (
    <MainLayout menuItem="hinos" metaTitle="Harpa Cristã | Favoritos">
      {!isLoaded && <Loading />}
      {isLoaded && (
        <Container>
          <h1>Meus Hinos Favoritos</h1>

          <HymnsMenu menuItem="favoritos" />

          <ResultInfo>
            Você marcou como favorito <mark>{hymns && hymns.length} hinos</mark>
            .
          </ResultInfo>

          <HymnsContainer>
            {hymns && <HymnsList hymns={hymns} />}
          </HymnsContainer>

          <BackButton />
        </Container>
      )}
    </MainLayout>
  );
};

export default Favoritos;
