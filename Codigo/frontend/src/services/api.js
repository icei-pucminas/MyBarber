import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export async function getAgendamentos(idFuncionario, dataAgendamento) {
  try {
    const { data } = await api.post('/funcionario/agendamentos', {
      id: idFuncionario,
      data: dataAgendamento
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}
export default api;
