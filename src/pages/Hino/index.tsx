import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Swipeable } from 'react-swipeable';
import { Container, ResultInfo, HymnContainer, HymnBody } from './styles';
import api from '../../services/api';

import BackButton from '../../components/BackButton';
import MainLayout from '../../layouts/MainLayout';
import Loading from '../../components/Loading';
import HymnFooter from '../../components/HymnFooter';

interface Authors {
  initials: string;
  name: string;
}

interface Hymn {
  id: number;
  num_hymn: number;
  title: string;
  body: string;
  slug: string;
  authors: Authors[];
}

interface FavoriteHymn {
  id: number;
  title: string;
  slug: string;
  author: string;
}

const Hino: React.FC = () => {
  const [hymn, setHymn] = useState<Hymn>();
  const [prevHymn, setPrevHymn] = useState<Hymn>();
  const [nextHymn, setNextHymn] = useState<Hymn>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [fontSize, setFontSize] = useState(2.0);

  const { id } = useParams();

  const { push } = useHistory();

  const swipeaOptions = {
    delta: 100,
    // preventDefaultTouchmoveEvent: false,
  };

  useEffect(() => {
    api.get(`/hymns/${id}`).then(response => {
      setHymn(response.data);
      setIsLoaded(true);
      setIsFavorited(false);
      window.scrollTo(0, 0); // fix: render page on top for mobile

      const favoritesData = sessionStorage.getItem('@HarpaCrista:favorites')
        ? sessionStorage.getItem('@HarpaCrista:favorites')
        : localStorage.getItem('@HarpaCrista:favorites');

      if (favoritesData) {
        const favorites = JSON.parse(favoritesData);
        const favorite = favorites.filter((item: FavoriteHymn) => {
          return item.id === response.data.id;
        });

        console.log(favorite);

        if (favorite && favorite.length === 1) {
          setIsFavorited(true);
        }
      }
    });

    const prevId = Number(id) - 1;
    api.get(`/hymns/${prevId}`).then(response => {
      setPrevHymn(response.data);
    });

    const nextId = Number(id) + 1;
    api.get(`/hymns/${nextId}`).then(response => {
      setNextHymn(response.data);
    });
  }, [id]);

  const prevUrl = useMemo(() => {
    return prevHymn ? `/hino/${prevHymn.num_hymn}/${prevHymn.slug}` : '';
  }, [prevHymn]);

  const nextUrl = useMemo(() => {
    return nextHymn ? `/hino/${nextHymn.num_hymn}/${nextHymn.slug}` : '';
  }, [nextHymn]);

  const titleWithNumber = useMemo(() => {
    return hymn
      ? `${hymn.num_hymn.toString().padStart(3, '0')} - ${hymn.title}`
      : '';
  }, [hymn]);

  const increaseText = useCallback(() => {
    if (fontSize < 3) setFontSize(fontSize + 0.2);
  }, [fontSize]);

  const decreaseText = useCallback(() => {
    if (fontSize > 1.6) setFontSize(fontSize - 0.2);
  }, [fontSize]);

  const goToNextHymn = useCallback(() => {
    push(nextUrl);
  }, [nextUrl, push]);

  const goToPrevHymn = useCallback(() => {
    push(prevUrl);
  }, [prevUrl, push]);

  /**
   * Função que gerencia o hino com relação aos favoritos
   * */
  const handleFavorite = useCallback(() => {
    const favoritesData = sessionStorage.getItem('@HarpaCrista:favorites');
    const favorites = favoritesData ? JSON.parse(favoritesData) : null;

    // Se o hino não está marcado como favorito
    if (!isFavorited) {
      const hymnToFavorite = {
        id: hymn?.id,
        title: hymn?.title,
        slug: hymn?.slug,
        author: hymn?.authors[0].name,
      };

      // Se não tiver nenhum hino na lista de favoritos
      if (!favorites) {
        localStorage.setItem(
          '@HarpaCrista:favorites',
          JSON.stringify([hymnToFavorite]),
        );
        sessionStorage.setItem(
          '@HarpaCrista:favorites',
          JSON.stringify([hymnToFavorite]),
        );
      } else {
        // Adicionar o hino na lista de favoritos existentes
        const newFavorites = [...favorites, hymnToFavorite];
        localStorage.setItem(
          '@HarpaCrista:favorites',
          JSON.stringify(newFavorites),
        );
        sessionStorage.setItem(
          '@HarpaCrista:favorites',
          JSON.stringify(newFavorites),
        );
      }

      setIsFavorited(!isFavorited);
    } else {
      // Senão, remove das listas e desmarca como favorito
      const newFavorites = favorites.filter((item: FavoriteHymn) => {
        return item.id !== hymn?.id;
      });

      localStorage.setItem(
        '@HarpaCrista:favorites',
        JSON.stringify(newFavorites),
      );
      sessionStorage.setItem(
        '@HarpaCrista:favorites',
        JSON.stringify(newFavorites),
      );

      setIsFavorited(false);
    }
  }, [hymn, isFavorited]);

  const handleShare = useCallback(() => {
    const newVariable: any = window.navigator;

    if (newVariable && newVariable.share) {
      newVariable
        .share({
          title: hymn?.title,
          text: `Hino nº ${titleWithNumber}`,
          url: window.location.pathname,
        })
        .then(() => console.log('Successful share'))
        .catch((error: Error) => console.log('Error sharing hymn', error));
    }
  }, [hymn, titleWithNumber]);

  return (
    <>
      <MainLayout
        menuItem="hinos"
        metaTitle={`Harpa Cristã | ${titleWithNumber}`}
      >
        {!isLoaded && <Loading />}
        {isLoaded && (
          <Container>
            <Swipeable
              onSwipedLeft={() => goToNextHymn()}
              onSwipedRight={() => goToPrevHymn()}
              {...swipeaOptions}
            >
              <h1>{titleWithNumber}</h1>

              <ResultInfo>
                {hymn &&
                  hymn.authors.flatMap(author => author.name).join(' / ')}
              </ResultInfo>

              <HymnContainer>
                {prevHymn && (
                  <Link to={prevUrl} className="prevButton">
                    <FiChevronLeft size={30} />
                  </Link>
                )}

                {hymn && (
                  <HymnBody
                    style={{ fontSize: `${fontSize}rem` }}
                    dangerouslySetInnerHTML={{ __html: hymn.body }}
                    id="hymn-body"
                  />
                )}

                {nextHymn && (
                  <Link to={nextUrl} className="nextButton">
                    <FiChevronRight size={30} />
                  </Link>
                )}
              </HymnContainer>
              <BackButton url="/hinos" />
            </Swipeable>
          </Container>
        )}
      </MainLayout>
      <HymnFooter
        hymnNumber={hymn?.num_hymn}
        isFavorited={isFavorited}
        handleFavorite={handleFavorite}
        increaseText={increaseText}
        decreaseText={decreaseText}
        goToPrevHymn={goToPrevHymn}
        goToNextHymn={goToNextHymn}
        handleShare={handleShare}
      />
    </>
  );
};

export default Hino;
