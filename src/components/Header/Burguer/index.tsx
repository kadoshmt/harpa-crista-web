import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { FiHome } from 'react-icons/fi';
import { FaMusic, FaBookOpen } from 'react-icons/fa';
import { StyledBurger } from './styles';

const Burger: React.FC = () => {
  return (
    <StyledBurger>
      <Menu>
        <Link id="home" className="menu-item" to="/">
          <FiHome />
          Início
        </Link>
        <Link id="about" className="menu-item" to="/hinos">
          <FaMusic />
          Hinos
        </Link>
        <Link id="contact" className="menu-item" to="/biblia">
          <FaBookOpen />
          Bíblia
        </Link>
      </Menu>
    </StyledBurger>
  );
};

export default Burger;
