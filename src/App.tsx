import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import AppProvider from './hooks';
import Routes from './routes';

const trackingId = 'UA-177944018-1';

ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
    </Router>
  );
};

export default App;
