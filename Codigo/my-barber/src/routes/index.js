import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import CadastroGeral from '../pages/CadastroGeral';

const Routes = () => (
  // Aqui colocamos todas nossas rotas e a página(componente) a ser exibido
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/CadastroGeral" component={CadastroGeral} />
  </Switch>
);

export default Routes;