import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import CustomRoute from './CustomRoute';
import Header from '../components/Header';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import CadastroBarbearia from '../pages/Cadastro/Barbearia';
import Barbearias from '../pages/Barbearias';
import Barbearia from '../pages/Barbearia';
import Perfil from '../pages/Perfil';
import Funcionarios from '../pages/Funcionarios';
import Agendamentos from '../pages/Agendamentos';

const Routes = () => (
  // Aqui colocamos todas nossas rotas e a página(componente) a ser exibido
  <AuthProvider>
    <Header />
    <Switch>
      <CustomRoute exact path="/" component={Home} />
      <CustomRoute exact path="/login" component={Login} disallowAuthenticated />
      <CustomRoute exact path="/cadastro" component={Cadastro} disallowAuthenticated />
      <CustomRoute exact path="/cadastro/barbearia" component={CadastroBarbearia} disallowAuthenticated />
      <CustomRoute exact path="/barbearias" component={Barbearias} disallowBarber />
      <CustomRoute exact path="/perfil/" component={Perfil} isPrivate />
      <CustomRoute exact path="/funcionarios/" component={Funcionarios} isPrivate disallowClient />
      <CustomRoute exact path="/agendamentos" component={Agendamentos} isPrivate />
      <CustomRoute exact path="/barbearia/:id" component={Barbearia} isPrivate disallowBarber />
    </Switch>
  </AuthProvider>
);

export default Routes;