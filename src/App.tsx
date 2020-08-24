import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import AppProvider from './hooks';
import { ThemeProvider } from './hooks/theme';
// import Header from './components/Header';

const App: React.FC = () => {
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
