import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/Home';
import Hinos from '../pages/Hinos';
import Hino from '../pages/Hino';
import Autores from '../pages/Hinos/Autores';
import Autor from '../pages/Hinos/Autor';
import Categorias from '../pages/Hinos/Categorias';
import Categoria from '../pages/Hinos/Categoria';
// import SignIn from '../pages/Signin';
// import SignUp from '../pages/Signup';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/hinos" component={Hinos} exact />
    <Route path="/hinos/autores" component={Autores} exact />
    <Route path="/hinos/autor/:id" component={Autor} />
    <Route path="/hinos/categorias" component={Categorias} exact />
    <Route path="/hinos/categoria/:id" component={Categoria} />
    <Route path="/hinos/:page" component={Hinos} />
    <Route path="/hino/:id" component={Hino} />

    <Route path="/profile" component={Profile} isPrivate />
  </Switch>
);

export default Routes;
