import React from 'react';
import { Card } from './styles';

const DEFAULT_IMG = "https://exame.com/wp-content/uploads/2020/05/whatsapp-image-2020-05-12-at-10.47.30.jpg";

const AgendamentosCliente = ({ agendamentos }) => {

  console.log(agendamentos);

  return (
    agendamentos.map((agendamento) => (
      <Card>
        <img src={DEFAULT_IMG} alt="Barbearia Interior" />
        <div>
          <p>NOME BARBEARIA</p>
          <span>Rua x, nº 11, Gonçalves, São Bento - SP</span>
        </div>
        <div>
          <p>Dia: 19/07/2021</p>
          <p>Horário: 13:00</p>
          <button>Cancelar Agendamento?</button>
        </div>
      </Card>
    ))
  )
};

export default AgendamentosCliente;