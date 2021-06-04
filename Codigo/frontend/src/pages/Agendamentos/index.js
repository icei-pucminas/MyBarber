import React, { useState } from 'react';

import AgendamentosCliente from './AgendamentosCliente';
import AgendamentosBarbearia from './AgendamentosBarbearia';
import { Container } from './styles';

const Agendamentos = () => {

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Container>
      <main>
        <img src={user.imagem} alt="Foto de Perfil" />
        <h1>Meus Agendamentos</h1>
      </main>
      {
        !user.cnpj ? (
          <AgendamentosCliente agendamentos={new Array(2).fill()} />
        ) :
          (<AgendamentosBarbearia />)
      }
    </Container>
  )
}

export default Agendamentos;