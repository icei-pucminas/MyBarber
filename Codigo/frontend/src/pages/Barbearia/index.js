import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import Calendar from 'react-calendar';
import bookingHours from '../../helpers/bookingHours';
import api from '../../services/api';

import { Container, Horario } from './styles';
import { SeletorFuncionario } from '../Agendamentos/AgendamentosBarbearia/styles';

const Barbearia = () => {
  const { id: idBarbearia } = useParams();

  const [barbearia, setBarbearia] = useState({});
  const [funcionarios, setFuncionarios] = useState([]);
  const [dateValue, setDateValue] = useState(new Date());
  const [funcionario, setFuncionario] = useState("");
  const [horariosFuncionario, setHorariosFuncionario] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`barbearia/${idBarbearia}`);
        setBarbearia(data);
      } catch (error) {
      }
      try {
        const { data } = await api.get(`barbearia/funcionarios/${idBarbearia}`);
        setFuncionarios(data);
      } catch (error) {
      }
    })();
  }, [idBarbearia]);


  const handleFuncionario = (e) => {
    const nome = e.target.value;
    setFuncionario(nome);
    const [{ horarioInicial, horarioFinal }] = funcionarios.filter((funcionario) => funcionario.nome === nome);
    const horarios = bookingHours(horarioInicial, horarioFinal);
    setHorariosFuncionario(horarios);
  }

  return (
    <Container>
      <main>
        <img src={barbearia.imagem} alt="Imagem Barbearia" />
        <div>
          <p>{barbearia.nome}</p>
          <span>{`${barbearia.logradouro}, nº${barbearia.numero},
                 ${barbearia.bairro}, ${barbearia.cidade} - ${barbearia.estado}`}</span>
        </div>
      </main>
      <section>
        <Calendar value={dateValue} onChange={setDateValue} />
        <div className="container-func">
          <SeletorFuncionario>
            <FiUser size={32} />
            <select name="funcionarios" value={funcionario} onChange={handleFuncionario}>
              {funcionarios.map((funcionario) => (
                <option key={funcionario.id} value={funcionario.nome}>{funcionario.nome}</option>
              ))}
            </select>
          </SeletorFuncionario>
          <div className="container-horarios">
            {horariosFuncionario.map(horario => (
              <Horario key={horario}><span>{horario}</span></Horario>
            ))}
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Barbearia;