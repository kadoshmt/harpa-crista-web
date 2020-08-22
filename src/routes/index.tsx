import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/Home';
import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Route path="/profile" component={Profile} isPrivate />
  </Switch>
);

export default Routes;
