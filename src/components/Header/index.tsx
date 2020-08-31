import React, { useState, useEffect, useCallback } from 'react';

import { Link } from 'react-router-dom';

// import { FiHome, FiBookOpen } from 'react-icons/fi';
// import { FaHome, FaMicrophoneAlt, FaMusic, FaBookOpen } from 'react-icons/fa';
import { FiHome, FiSearch, FiSun, FiMoon } from 'react-icons/fi';
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
  SwitchLeftIcon,
  SwitchRightIcon,
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
          {/* eslint-disable */}
          <Switch
            onChange={toggleTheme}
            checked={themeTitle === 'light'}
            checkedIcon={
              (<SwitchRightIcon>
                <FiSun size={16} color={theme.colors.textInPrimary} />
              </SwitchRightIcon>
              )
            }
            uncheckedIcon={(
              <SwitchLeftIcon>
                {' '}
                <FiMoon size={16} />{' '}
              </SwitchLeftIcon>
            )}
            height={24}
            width={50}
            offColor={shade(0.3, theme.colors.textSecondary)}
            onColor={theme.colors.primary}
            
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          />
          {/* eslint-enable */}
        </HeaderContainerRight>
      </HeaderContent>
    </Container>
  );
};

export default Header;
