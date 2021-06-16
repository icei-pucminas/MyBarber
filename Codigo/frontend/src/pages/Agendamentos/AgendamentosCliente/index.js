import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import { Card } from './styles';

const handleCancel = () => {
  // eslint-disable-next-line no-restricted-globals
  const cancel = confirm('Você realmente deseja cancelar o agendamento?');
  if (!cancel) return;
}

const AgendamentosCliente = ({ id }) => {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    async function getBookings() {
      try {
        const { data } = await api.get(`/cliente/agendamentos/${id}`);
        setAgendamentos(data);
      } catch (error) {
        console.log(error);
      }
    }
    getBookings();
  }, [id]);

  if (!agendamentos) {
    return (
      <div style={{ color: 'white' }}>
        Não foram encontrados agendamentos!
      </div>
    )
  }

  return (
    agendamentos.map((agendamento) => (
      <Card key={agendamento.id}>
        <img src={agendamento.barbeiro.barbearia.imagem} alt="Barbearia Interior" />
        <div>
          <p>{agendamento.barbeiro.barbearia.nome}</p>
          <span>{`${agendamento.barbeiro.barbearia.logradouro}, nº${agendamento.barbeiro.barbearia.numero},
                 ${agendamento.barbeiro.barbearia.bairro}, ${agendamento.barbeiro.barbearia.cidade} - ${agendamento.barbeiro.barbearia.estado}`}</span>
        </div>
        <div>
          <p>Dia: {new Date(agendamento.data).toLocaleDateString()}</p>
          <p>Horário: {agendamento.horario}</p>
          <button onClick={handleCancel}>Cancelar Agendamento?</button>
        </div>
      </Card>
    ))
  )
};

export default AgendamentosCliente;