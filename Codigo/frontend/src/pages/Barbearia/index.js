import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import Calendar from 'react-calendar';

import { Container, Horario } from './styles';
import { SeletorFuncionario } from '../Agendamentos/AgendamentosBarbearia/styles';

const DEFAULT_IMG = "https://exame.com/wp-content/uploads/2020/05/whatsapp-image-2020-05-12-at-10.47.30.jpg";

const Barbearia = () => {
  const { id: idBarbearia } = useParams();

  const [dateValue, setDateValue] = useState(new Date());
  const [funcionario, setFuncionario] = useState("");

  useEffect(() => {

  }, [])

  return (
    <Container>
      <main>
        <img src={DEFAULT_IMG} alt="Imagem Barbearia" />
        <div>
          <p>Nome Barbearia</p>
          <span>Address</span>
          {/* <span>{`${barbearia.logradouro}, nº${barbearia.numero},
                 ${barbearia.bairro}, ${barbearia.cidade} - ${barbearia.estado}`}</span> */}
        </div>
      </main>
      <section>
        <Calendar value={dateValue} onChange={setDateValue} />
        <div>
          <SeletorFuncionario>
            <FiUser size={32} />
            <select name="funcionarios" value={funcionario} onChange={(e) => setFuncionario(e.target.value)}>
              <option value="Fulano da Silva">Fulano da Silva</option>
              <option value="Beltrano Augusto">Beltrano Augusto</option>
            </select>
          </SeletorFuncionario>
          <div>
            <Horario><span>08:00</span></Horario>
            <Horario><span>09:00</span></Horario>
            <Horario><span>10:00</span></Horario>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Barbearia;