import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ReactGA from 'react-ga';
// import { createBrowserHistory } from 'history';

import AppProvider from './hooks';

import Routes from './routes';

// const history = createBrowserHistory();

const trackingId = 'UA-177944018-1';

ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

// Initialize google analytics page view tracking
// history.listen(browser => {
//   ReactGA.set({ page: browser.location.pathname }); // Update the user's current page
//   ReactGA.pageview(browser.location.pathname); // Record a pageview for the given page
// });

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
