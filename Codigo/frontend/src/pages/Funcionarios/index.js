import React from 'react';
import { FiTrash2, FiX } from 'react-icons/fi';
import fakeData from './fakeData';

import { Container, CardFuncionario } from './styles';
import Button from '../../components/Button';
import ModalCadastro from './ModalCadastro';

const Funcionarios = () => {

  return (
    <Container>
      <h1>Funcionários</h1>
      {fakeData.map((funcionario) => (
        <CardFuncionario>
          <img src={funcionario.foto} alt={funcionario.nome} />
          <section>
            <p>{funcionario.nome}</p>
            <div>
              <span>{funcionario.telefone}</span>
              <span>Horário de Trabalho: {funcionario.horaInicio} às {funcionario.horaFim}</span>
              <button type="button"><FiTrash2 size={32} /></button>
            </div>
          </section>
        </CardFuncionario>
      ))}
      <Button>Cadastrar novo Funcionário</Button>
    </Container>
  )
};

export default Funcionarios;