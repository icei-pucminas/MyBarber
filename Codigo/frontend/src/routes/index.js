import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthProvider, Context } from '../context/AuthContext';

import Loading from '../components/Loading';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import CadastroBarbearia from '../pages/Cadastro/Barbearia';
import Barbearias from '../pages/Barbearias';
import Perfil from '../pages/Perfil';


const CustomRoute = ({ isPrivate, ...rest }) => {
  const { authenticated, loading } = useContext(Context);

  if (loading) {
    return <Loading />
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} />
}

const Routes = () => (
  // Aqui colocamos todas nossas rotas e a página(componente) a ser exibido
  <AuthProvider>
    <Switch>
      <CustomRoute exact path="/" component={Home} />
      <CustomRoute exact path="/login" component={Login} />
      <CustomRoute exact path="/cadastro" component={Cadastro} />
      <CustomRoute exact path="/cadastro/barbearia" component={CadastroBarbearia} />
      <CustomRoute exact path="/barbearias" component={Barbearias} />
      <CustomRoute exact isPrivate path="/perfil/" component={Perfil} />
    </Switch>
  </AuthProvider>
);

export default Routes;