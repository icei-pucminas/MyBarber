import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { getAgendamentos } from '../../../services/api';
import SeletorFuncionarios from '../../../components/SeletorFuncionarios';
import { Container, TabelaAgendamentos } from './styles';

const AgendamentosBarbearia = ({ id: idBarbearia }) => {
  const [dateValue, setDateValue] = useState(new Date());
  const [funcionario, setFuncionario] = useState({});
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    (async () => {
      const agendas = await getAgendamentos(funcionario.id, dateValue);
      setAgendamentos(agendas);
    })();
  }, [funcionario, dateValue])

  return (
    <Container>
      <Calendar value={dateValue} onChange={setDateValue} />
      <main>
        <SeletorFuncionarios idBarbearia={idBarbearia} setFuncionario={setFuncionario} />
        <TabelaAgendamentos>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Horário</th>
                <th>Telefone</th>
              </tr>
            </thead>
            <tbody>
              {
                agendamentos.map((agendamento) => (
                  <tr key={agendamento.id}>
                    <td>{agendamento.cliente.nome}</td>
                    <td>{agendamento.horario}</td>
                    <td>{agendamento.cliente.telefone}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </TabelaAgendamentos>
      </main>
    </Container>
  )
};

export default AgendamentosBarbearia;