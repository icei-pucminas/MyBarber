import React, { useEffect, useState } from 'react';
import { FiUser } from 'react-icons/fi';
import api from '../../services/api';

import { Container } from './styles';

const SeletorFuncionarios = ({ idBarbearia, setFuncionario }) => {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`/barbearia/funcionarios/${idBarbearia}`);
        setFuncionarios(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [idBarbearia]);

  const handleFuncionario = (e) => {
    const nome = e.target.value;
    const funcionario = funcionarios.find(func => func.nome === nome);
    setFuncionario(funcionario);
  }

  return (
    <Container>
      <FiUser size={32} />
      <select name="funcionarios" defaultValue="none" onChange={handleFuncionario}>
        <option value="none" disabled>Selecione um funcionario</option>
        {funcionarios.map((funcionario) => (
          <option key={funcionario.id} value={funcionario.nome}>{funcionario.nome}</option>
        ))}
      </select>
    </Container>
  )
}

export default SeletorFuncionarios;