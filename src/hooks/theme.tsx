import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
  useMemo,
} from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from 'styled-components';

import { GlobalStyles, themes } from '../styles';

// import api from '../services/api';

interface ThemeOptions {
  [key: string]: 'light' | 'dark';
}
type Theme = [ThemeOptions, DefaultTheme];

type Response<T> = [T, Dispatch<SetStateAction<T>>];

interface ThemeContextData {
  theme: DefaultTheme;
  themeTitle?: string;
  toggleTheme(): void;
  usePersistedState<T>(key: string, initialState: T): Response<T>;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
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

  const theme = useMemo(() => {
    return themes[themeMode];
  }, [themeMode]);

  function usePersistedState<T>(key: string, initialState: T): Response<T> {
    const [appTheme, setAppTheme] = useState(() => {
      const storageValue = localStorage.getItem(`@harpacrista:${key}`);

      if (storageValue) {
        return JSON.parse(storageValue);
      }

      return initialState;
    });

    useEffect(() => {
      localStorage.setItem(`@harpacrista:${key}`, JSON.stringify(appTheme));
    }, [key, appTheme]);

    return [appTheme, setAppTheme];
  }

  return (
    <ThemeContext.Provider
      value={{
        themeTitle: themeMode,
        theme: themes[themeMode],
        toggleTheme,
        usePersistedState,
      }}
    >
      <StyledThemeProvider theme={theme}>
        {children}
        <GlobalStyles />
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}

export { useTheme, ThemeProvider };
