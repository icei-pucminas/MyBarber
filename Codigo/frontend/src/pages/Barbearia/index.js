import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Calendar from 'react-calendar';
import bookingHours from '../../helpers/bookingHours';
import api, { getAgendamentos } from '../../services/api';

import SeletorFuncionarios from '../../components/SeletorFuncionarios';
import Button from '../../components/Button';
import { Container, Horario } from './styles';

const Barbearia = () => {
  const { id: idBarbearia } = useParams();
  const history = useHistory();

  const [barbearia, setBarbearia] = useState({});
  const [horariosFuncionario, setHorariosFuncionario] = useState([]);
  const [dateValue, setDateValue] = useState(new Date());
  const [funcionario, setFuncionario] = useState({});
  const [horarioSelecionado, setHorarioSelecionado] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`barbearia/${idBarbearia}`);
        setBarbearia(data);
      } catch (error) {
      }
    })();
  }, [idBarbearia]);

  useEffect(() => {
    (async () => {
      if (!funcionario.id) return;
      const agendas = await getAgendamentos(funcionario.id, dateValue);
      const horariosOcupados = agendas.map(agenda => agenda.horario);
      const horarios = funcionario.id && bookingHours(funcionario.horarioInicial, funcionario.horarioFinal);
      const horariosDisponiveis = horarios.filter(horario => !horariosOcupados.includes(horario));
      setHorariosFuncionario(horariosDisponiveis);
    })();
  }, [funcionario, dateValue])

  const handleHorario = (e) => {
    setHorarioSelecionado(e.target.value);
  }

  const handleAgendar = async () => {
    const { id: idCliente } = JSON.parse(localStorage.getItem('user'));
    const dados = { data: dateValue, horario: horarioSelecionado, idCliente, idBarbeiro: funcionario.id };
    try {
      await api.post('/agenda', dados);
      alert("Agendado com sucesso!");
      history.push('/agendamentos');
    } catch (error) {
      console.log(error);
      alert("Falha ao agendar!")
    }
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
          <SeletorFuncionarios idBarbearia={idBarbearia} setFuncionario={setFuncionario} />
          <div className="container-horarios">
            {horariosFuncionario.map(horario => (
              <Horario key={horario} value={horario}>
                <label htmlFor="horario">{horario}</label>
                <input type="radio" name="horario" value={horario} onChange={handleHorario} />
              </Horario>
            ))}
          </div>
          <Button className="btn-agendar" onClick={handleAgendar} disabled={!horarioSelecionado}>Agendar</Button>
        </div>
      </section>
    </Container>
  )
}

export default Barbearia;