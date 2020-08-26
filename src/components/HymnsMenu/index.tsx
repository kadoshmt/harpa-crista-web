import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';

interface Props {
  menuItem?: 'numeros' | 'categorias' | 'autores';
}

const HymnsMenu: React.FC<Props> = ({ menuItem = 'numeros' }) => {
  return (
    <Container>
      <Link to="/hinos" className={menuItem === 'numeros' ? 'activeMenu' : ''}>
        <span>Listar por Números</span>
      </Link>
      <Link
        to="/hinos/categorias"
        className={menuItem === 'categorias' ? 'activeMenu' : ''}
      >
        <span>Listar por Categorias</span>
      </Link>
      <Link
        to="/hinos/autores"
        className={menuItem === 'autores' ? 'activeMenu' : ''}
      >
        <span>Listar por Autores</span>
      </Link>
    </Container>
  );
};

export default HymnsMenu;
