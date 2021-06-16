import React from 'react';
import AgendamentosCliente from './AgendamentosCliente';
import AgendamentosBarbearia from './AgendamentosBarbearia';
import { Container } from './styles';

const Agendamentos = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const isClient = !user.cnpj;

  return (
    <Container>
      <main>
        <img src={user.imagem} alt="Foto de Perfil" />
        <h1>Meus Agendamentos</h1>
      </main>
      {
        isClient ? (
          <AgendamentosCliente id={user.id} />
        ) :
          (<AgendamentosBarbearia id={user.id} />)
      }
    </Container>
  )
}

export default Agendamentos;