import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from 'styled-components';

import { GlobalStyles, themes } from '../styles';

// import api from '../services/api';

interface ThemeOptions {
  [key: string]: 'light' | 'dark';
  // [key: string]: ThemeOptions[keyof ThemeOptions];
}

interface ThemeContextData {
  theme: DefaultTheme;
  themeTitle?: string;
  toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [themeMode, setThemeMode] = useState<string>(() => {
    const theme = localStorage.getItem('@HarpaCrista:appTheme');
    if (theme) {
      return theme;
    }
    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('@HarpaCrista:appTheme', themeMode);
  }, [themeMode]);

  const toggleTheme = useCallback(() => {
    setThemeMode(prevState => {
      if (prevState === 'light') {
        return 'dark';
      }
      return 'light';
    });
  }, []);

  const value = {
    themeTitle: themeMode,
    // @ts-ignore
    theme: themes[themeMode],
    toggleTheme,
  };
  // @ts-ignore
  const costumTheme = themes[themeMode];

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={costumTheme}>
        {children}
        <GlobalStyles />
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);
  return context;
}
