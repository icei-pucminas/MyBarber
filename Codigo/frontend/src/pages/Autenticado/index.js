import React, { useEffect, useState, useContext } from 'react';
import api from '../../services/api';
import { Context } from '../../context/AuthContext';

const Autenticado = () => {
  const [sucesso, setSucesso] = useState([]);
  const { handleLogout } = useContext(Context);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/protected');
      setSucesso(data);
    })();
  }, []);

  return (
    <div>
      {sucesso.message}
      <button onClick={handleLogout}>
        sair
      </button>
    </div>
  )
}

export default Autenticado;