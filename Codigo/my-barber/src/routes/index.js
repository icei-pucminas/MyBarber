import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthProvider, Context } from '../context/AuthContext';

import Loading from '../components/Loading';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import CadastroBarbearia from '../pages/Cadastro/Barbearia';
import Autenticado from '../pages/Autenticado';


const CustomRoute = ({ isPrivate, ...rest }) => {
  const { authenticated, loading } = useContext(Context);
  console.log(authenticated);

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
      <CustomRoute exact isPrivate path="/protected" component={Autenticado} />
    </Switch>
  </AuthProvider>
);

export default Routes;