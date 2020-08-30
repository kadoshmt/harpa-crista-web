import React, { useCallback, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

// import { FiHome, FiBookOpen } from 'react-icons/fi';
// import { FaHome, FaMicrophoneAlt, FaMusic, FaBookOpen } from 'react-icons/fa';
import { FiHome, FiSearch } from 'react-icons/fi';
import { FaMusic, FaBookOpen } from 'react-icons/fa';
// import { IoMdMusicalNotes, IoMdMusicalNote, IoMdBook } from 'react-icons/io';

import Switch from 'react-switch';
import { shade } from 'polished';
import { useTheme } from '../../hooks/theme';

import {
  Container,
  HeaderContent,
  Logo,
  SearchContainer,
  MenuContainer,
  MenuBurguerContainer,
} from './styles';
import Burger from './Burguer';

interface Props {
  // toggleTheme(): void;
  menuItem?: 'home' | 'hinos' | 'biblia' | undefined;
}

const Header: React.FC<Props> = ({ menuItem }) => {
  const { theme, themeTitle, toggleTheme } = useTheme();
  const [words, setWords] = useState<string>('');

  const history = useHistory();

  const handleSearch = useCallback(
    async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();

      history.push(`/buscar?termo=${words}`);
    },
    [history, words],
  );

  return (
    <Container>
      <HeaderContent>
        <MenuBurguerContainer>
          <Burger />
        </MenuBurguerContainer>
        <Logo>HARPA CRISTÃ</Logo>
        <SearchContainer>
          <form onSubmit={handleSearch}>
            <div>
              <input
                type="text"
                name=""
                placeholder="Que hino você está procurando?"
                onChange={e => setWords(e.target.value)}
              />
              <button type="submit">
                <FiSearch size={20} />
              </button>
            </div>
          </form>
        </SearchContainer>
        <MenuContainer>
          <menu>
            <li>
              <Link to="/" className={menuItem === 'home' ? 'activeMenu' : ''}>
                <FiHome
                  color={
                    menuItem === 'home'
                      ? theme.colors.primary
                      : theme.colors.textSecondary
                  }
                  size={20}
                />
                <span>Início</span>
              </Link>
            </li>
            <li>
              <Link
                to="/biblia"
                className={menuItem === 'biblia' ? 'activeMenu' : ''}
              >
                <FaBookOpen
                  color={
                    menuItem === 'biblia'
                      ? theme.colors.primary
                      : theme.colors.textSecondary
                  }
                  size={20}
                />
                <span>Bíblia</span>
              </Link>
            </li>
            <li>
              <Link
                to="/hinos"
                className={menuItem === 'hinos' ? 'activeMenu' : ''}
              >
                <FaMusic
                  color={
                    menuItem === 'hinos'
                      ? theme.colors.primary
                      : theme.colors.textSecondary
                  }
                  size={20}
                />
                <span>Hinos</span>
              </Link>
            </li>
          </menu>
        </MenuContainer>

        <Switch
          onChange={toggleTheme}
          checked={themeTitle === 'light'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={34}
          offColor={shade(0.3, theme.colors.textSecondary)}
          onColor={theme.colors.primary}
        />
      </HeaderContent>
    </Container>
  );
};

export default Header;
