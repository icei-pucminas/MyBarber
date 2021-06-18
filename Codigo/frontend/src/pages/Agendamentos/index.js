import React from 'react';
import AgendamentosCliente from './AgendamentosCliente';
import AgendamentosBarbearia from './AgendamentosBarbearia';
import api from '../../services/api';
import { Container } from './styles';

const Agendamentos = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const isClient = !user.cnpj;

  const handleCancel = async (id, agendamentos, setAgendamentos) => {
    // eslint-disable-next-line no-restricted-globals
    const cancel = confirm('Você realmente deseja cancelar o agendamento?');
    if (!cancel) return;
    try {
      await api.delete(`/agenda/cancelar/${id}`);
      const novosAgendamentos = agendamentos.filter((agendamento) => agendamento.id !== id);
      alert("Agendamento cancelado com sucesso!");
      setAgendamentos(novosAgendamentos);
    } catch (error) {
      alert("Ocorreu um erro ao cancelar!");
      console.log(error);
    }
  }

  return (
    <Container>
      <main>
        <img src={user.imagem} alt="Foto de Perfil" />
        <h1>Meus Agendamentos</h1>
      </main>
      {
        isClient ? (
          <AgendamentosCliente id={user.id} handleCancel={handleCancel} />
        ) :
          (<AgendamentosBarbearia id={user.id} handleCancel={handleCancel} />)
      }
    </Container>
  )
}

export default Agendamentos;