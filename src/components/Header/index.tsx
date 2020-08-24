import React from 'react';

import { Link } from 'react-router-dom';

// import { FiHome, FiBookOpen } from 'react-icons/fi';
// import { FaHome, FaMicrophoneAlt, FaMusic, FaBookOpen } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { FaMusic, FaBookOpen } from 'react-icons/fa';
// import { IoMdMusicalNotes, IoMdMusicalNote, IoMdBook } from 'react-icons/io';

import Switch from 'react-switch';
import { shade } from 'polished';
import { useTheme } from '../../hooks/theme';
import {
  Container,
  HeaderContent,
  SearchContainer,
  MenuContainer,
} from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { theme, themeTitle } = useTheme();
  return (
    <Container>
      <HeaderContent>
        <div>HARPA CRISTÃ</div>
        <SearchContainer>
          <input
            type="text"
            name=""
            placeholder="Que música você está buscando?"
          />
        </SearchContainer>
        <MenuContainer>
          <ul>
            <li>
              <Link to="/">
                <FiHome color={theme.colors.primary} size={20} />
                <span>Início</span>
              </Link>
            </li>
            <li>
              <Link to="biblia">
                <FaBookOpen color={theme.colors.headerIcons} size={20} />
                <span>Bíblia</span>
              </Link>
            </li>
            <li>
              <Link to="/hinos">
                <FaMusic color={theme.colors.headerIcons} size={20} />
                <span>Hinos</span>
              </Link>
            </li>
          </ul>
        </MenuContainer>
        <Switch
          onChange={toggleTheme}
          checked={themeTitle === 'light'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={34}
          offColor={shade(0.3, theme.colors.headerBackground)}
          onColor={theme.colors.primary}
        />
      </HeaderContent>
    </Container>
  );
};

export default Header;
