import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import CadastroBarbearia from '../pages/CadastroBarbearia';
import CadastroGeral from '../pages/CadastroGeral';

const Routes = () => (
  // Aqui colocamos todas nossas rotas e a página(componente) a ser exibido
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/cadastro" component={CadastroGeral} />
    <Route exact path="/cadastro/barbearia" component={CadastroBarbearia} />
  </Switch>
);

export default Routes;