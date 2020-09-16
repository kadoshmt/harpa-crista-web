import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
// import Home from '../pages/Home';
import Hinos from '../pages/Hinos';
import Hino from '../pages/Hino';
import Buscar from '../pages/Buscar';
import Biblia from '../pages/Biblia';
import LerBiblia from '../pages/Biblia/Ler';
import Autores from '../pages/Hinos/Autores';
import Autor from '../pages/Hinos/Autor';
import Categorias from '../pages/Hinos/Categorias';
import Categoria from '../pages/Hinos/Categoria';
import Favoritos from '../pages/Hinos/Favoritos';
// import SignIn from '../pages/Signin';
// import SignUp from '../pages/Signup';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Hinos} exact />
    <Route path="/biblia/:testament/:abbrev/:chapter" component={LerBiblia} />
    <Route path="/biblia" component={Biblia} exact />
    <Route path="/hinos" component={Hinos} exact />
    <Route path="/hinos/autores" component={Autores} exact />
    <Route path="/hinos/autor/:id" component={Autor} />
    <Route path="/hinos/categorias" component={Categorias} exact />
    <Route path="/hinos/categoria/:id" component={Categoria} />
    <Route path="/hinos/favoritos" component={Favoritos} exact />
    <Route path="/hinos/:page" component={Hinos} />
    <Route path="/hino/:id" component={Hino} />
    <Route path="/buscar" component={Buscar} />

    <Route path="/profile" component={Profile} isPrivate />
  </Switch>
);

export default Routes;
