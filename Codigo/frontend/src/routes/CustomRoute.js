import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Context } from '../context/AuthContext';

import Loading from '../components/Loading';

const CustomRoute = ({ isPrivate, disallowAuthenticated, disallowBarber, ...rest }) => {
  const { authenticated, loading } = useContext(Context);
  const isBarber = JSON.parse(localStorage.getItem('user'))?.cnpj;

  if (loading) {
    return <Loading />
  }

  if (disallowAuthenticated && authenticated) {
    return <Redirect to="/" />
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />
  }

  if (disallowBarber && isBarber && authenticated) {
    return <Redirect to="/" />
  }

  return <Route {...rest} />
}

export default CustomRoute;