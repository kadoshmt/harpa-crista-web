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
import usePersistedState from './hooks/usePersistedState';

const App: React.FC = () => {
  // const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  // const toggleTheme = (): void => {
  //   setTheme(theme.title === 'light' ? dark : light);
  // };
  return (
    <Router>
      <ThemeProvider>
        <AppProvider>
          <Routes />
        </AppProvider>
        {/* <GlobalStyle /> */}
      </ThemeProvider>
    </Router>
  );
};

export default App;
