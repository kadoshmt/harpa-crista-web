import React, { useState, useEffect, useCallback } from 'react';

import { Link } from 'react-router-dom';

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
  MenuContainer,
  MenuBurguerContainer,
  HeaderContainerRight,
} from './styles';
import Burger from './Burguer';
import SearchBar from './SearchBar';
import useWindowDimensions from '../../utils/useWindowDimensions';

interface Props {
  menuItem?: 'home' | 'hinos' | 'biblia' | undefined;
}

const Header: React.FC<Props> = ({ menuItem }) => {
  const { theme, themeTitle, toggleTheme } = useTheme();
  const { width } = useWindowDimensions();
  const [hideSearchBarIcon, setHideSearchBarIcon] = useState(true);
  const [searchBarDisplay, setSearchBarDisplay] = useState('none');

  useEffect(() => {
    setHideSearchBarIcon(width <= 580);
    // setSearchBarDisplay(width <= 580 ? 'none' : 'block');
  }, [width]);

  const handleSearchBar = useCallback(() => {
    setSearchBarDisplay(state => (state === 'none' ? 'block' : 'none'));
  }, []);

  return (
    <Container>
      <HeaderContent>
        <MenuBurguerContainer>
          <Burger />
        </MenuBurguerContainer>

        <Logo>HARPA CRISTÃ</Logo>

        <SearchBar displayProp={searchBarDisplay} />

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

        <HeaderContainerRight>
          {hideSearchBarIcon && (
            <button type="button" onClick={handleSearchBar}>
              <FiSearch size={28} />
            </button>
          )}

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
        </HeaderContainerRight>
      </HeaderContent>
    </Container>
  );
};

export default Header;
