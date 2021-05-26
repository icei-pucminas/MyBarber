import React, { useEffect, useState } from 'react';
import { FiTrash2, FiEdit2 } from 'react-icons/fi';
import api from '../../services/api';

import { Container, CardFuncionario } from './styles';
import Button from '../../components/Button';
import ModalCadastro from './ModalCadastro';

const Funcionarios = () => {

  const { id: idBarbearia } = JSON.parse(localStorage.getItem('user'));
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState({});

  useEffect(() => {
    async function getEmployees() {
      const { data } = await api.get(`/barbearia/funcionarios/${idBarbearia}`);
      setEmployees(data);
    }
    getEmployees();
  }, [idBarbearia])

  const handleEdit = (funcionario) => {
    setEditingEmployee(funcionario);
    setShowModal(true);
  };

  const handleClose = () => {
    setEditingEmployee({});
    setShowModal(false);
  }

  const handleDelete = async ({ id }) => {
    try {
      await api.delete(`/funcionario/delete/${id}`);
      const newEmployees = employees.filter((employee) => employee.id !== id);
      setEmployees(newEmployees);
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro ao excluir o funcionário.");
    }
  }

  return (
    <>
      <ModalCadastro show={showModal} handleClose={handleClose} funcionario={editingEmployee} idBarbearia={idBarbearia} />
      <Container blur={showModal}>
        <h1>Funcionários</h1>
        {employees.length > 0 ? (employees.map((funcionario) => (
          <CardFuncionario key={funcionario.nome}>
            <img src={funcionario.imagem} alt={funcionario.nome} />
            <main>
              <p>{funcionario.nome}</p>
              <section>
                <span>{funcionario.telefone}</span>
                <span>Horário de Trabalho: {funcionario.horarioInicial} às {funcionario.horarioFinal}</span>
                <div>
                  <button type="button" onClick={() => handleEdit(funcionario)}><FiEdit2 size={32} /></button>
                  <button type="button" onClick={() => handleDelete(funcionario)}><FiTrash2 size={32} /></button>
                </div>
              </section>
            </main>
          </CardFuncionario>
        ))) : (<h1>Ainda não possuem funcionários cadastrados!</h1>)}
        <Button onClick={() => setShowModal(true)} disabled={showModal}>Cadastrar novo Funcionário</Button>
      </Container>
    </>
  )
};

export default Funcionarios;