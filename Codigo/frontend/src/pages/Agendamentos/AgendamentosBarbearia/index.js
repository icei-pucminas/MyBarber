import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { Container, SeletorFuncionario, TabelaAgendamentos } from './styles';

const AgendamentosBarbearia = () => {
  const [dateValue, setDateValue] = useState(new Date());
  const [funcionario, setFuncionario] = useState("");

  return (
    <Container>
      <Calendar value={dateValue} onChange={setDateValue} />
      <main>
        <SeletorFuncionario>
          <FiUser size={32} />
          <select name="funcionarios" value={funcionario} onChange={(e) => setFuncionario(e.target.value)}>
            <option value="Fulano da Silva">Fulano da Silva</option>
            <option value="Beltrano Augusto">Beltrano Augusto</option>
          </select>
        </SeletorFuncionario>
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
              <tr>
                <td>James Bond</td>
                <td>15:00</td>
                <td>(31) 99837-0921</td>
              </tr>
              <tr>
                <td>Sylvester Stallone</td>
                <td>12:00</td>
                <td>(31) 99837-0921</td>
              </tr>
            </tbody>
          </table>
        </TabelaAgendamentos>
      </main>
    </Container>
  )
};

export default AgendamentosBarbearia;