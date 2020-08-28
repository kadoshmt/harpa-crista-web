import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { DefaultTheme } from 'styled-components';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import AppProvider from './hooks';
import usePersistedState from './hooks/usePersitedState';

// import Header from './components/Header';

import Routes from './routes';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  // const toggleTheme = (): void => {
  //   setTheme(theme.title === 'light' ? dark : light);
  // };

  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
    </Router>
  );
};

export default App;
