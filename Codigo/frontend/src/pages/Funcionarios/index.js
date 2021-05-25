import React, { useState } from 'react';
import { FiTrash2, FiEdit2 } from 'react-icons/fi';
import fakeData from './fakeData';

import { Container, CardFuncionario } from './styles';
import Button from '../../components/Button';
import ModalCadastro from './ModalCadastro';

const Funcionarios = () => {

  const [showModal, setShowModal] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState({});

  const handleEdit = (funcionario) => {
    setEditingEmployee(funcionario);
    setShowModal(true);
  };

  const handleClose = () => {
    setEditingEmployee({});
    setShowModal(false);
  }

  const handleDelete = (funcionario) => {
    console.log(funcionario);
  }

  return (
    <>
      <ModalCadastro show={showModal} handleClose={handleClose} funcionario={editingEmployee} />
      <Container blur={showModal}>
        <h1>Funcionários</h1>
        {fakeData.map((funcionario) => (
          <CardFuncionario key={funcionario.nome}>
            <img src={funcionario.foto} alt={funcionario.nome} />
            <main>
              <p>{funcionario.nome}</p>
              <section>
                <span>{funcionario.telefone}</span>
                <span>Horário de Trabalho: {funcionario.horaInicio} às {funcionario.horaFim}</span>
                <div>
                  <button type="button" onClick={() => handleEdit(funcionario)}><FiEdit2 size={32} /></button>
                  <button type="button" onClick={() => handleDelete(funcionario)}><FiTrash2 size={32} /></button>
                </div>
              </section>
            </main>
          </CardFuncionario>
        ))}
        <Button onClick={() => setShowModal(true)} disabled={showModal}>Cadastrar novo Funcionário</Button>
      </Container>
    </>
  )
};

export default Funcionarios;