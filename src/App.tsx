import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DefaultTheme } from 'styled-components';
import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Routes from './routes';
import AppProvider from './hooks';
import { ThemeProvider } from './hooks/theme';
import Header from './components/Header';
import { useTheme } from './hooks/theme';

const App: React.FC = () => {
  const { usePersistedState } = useTheme();
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  // const toggleTheme = (): void => {
  //   setTheme(theme.title === 'light' ? dark : light);
  // };
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </Router>
  );
};

export default App;
