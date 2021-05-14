import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import CadastroBarbearia from '../pages/Cadastro/Barbearia';

const Routes = () => (
  // Aqui colocamos todas nossas rotas e a página(componente) a ser exibido
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/cadastro" component={Cadastro} />
    <Route exact path="/cadastro/barbearia" component={CadastroBarbearia} />
  </Switch>
);

export default Routes;