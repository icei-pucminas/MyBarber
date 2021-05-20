import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../services/api';

export default function useAuth() {

  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, [])

  const handleLogin = async (dados) => {
    const { data: { user, token } } = await api.post('/auth', dados);

    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(user));
    api.defaults.headers.Authorization = `Bearer ${token}`;

    setAuthenticated(true);
    history.push('/protected');
  }

  const handleLogout = () => {
    setAuthenticated(false);

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    api.defaults.headers.Authorization = undefined;

    history.push('/login');
  }

  return { authenticated, loading, handleLogin, handleLogout }
}