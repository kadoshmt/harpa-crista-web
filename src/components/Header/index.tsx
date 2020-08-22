import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { shade } from 'polished';
import { useTheme } from '../../hooks/theme';
import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { theme, themeTitle } = useTheme();
  console.log(theme);
  return (
    <Container>
      Header
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
    </Container>
  );
};

export default Header;
