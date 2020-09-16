import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';

interface Props {
  menuItem?: 'numeros' | 'categorias' | 'autores' | 'favoritos';
}

const HymnsMenu: React.FC<Props> = ({ menuItem = 'numeros' }) => {
  return (
    <Container>
      <Link to="/hinos" className={menuItem === 'numeros' ? 'activeMenu' : ''}>
        <span>Números</span>
      </Link>
      <Link
        to="/hinos/categorias"
        className={menuItem === 'categorias' ? 'activeMenu' : ''}
      >
        <span>Categorias</span>
      </Link>
      <Link
        to="/hinos/autores"
        className={menuItem === 'autores' ? 'activeMenu' : ''}
      >
        <span>Autores</span>
      </Link>
      <Link
        to="/hinos/favoritos"
        className={menuItem === 'favoritos' ? 'activeMenu' : ''}
      >
        <span className="last-span">Favoritos</span>
      </Link>
    </Container>
  );
};

export default HymnsMenu;
