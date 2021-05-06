import React from 'react';

import Logo from '../Logo';

import { Container } from './styles';
import { BarraPesquisa } from './styles';

import lupa from '../../assets/lupa.svg';

function Header() {
  return (
    <Container>
      <Logo />
      <BarraPesquisa>
        <input placeholder="Busque uma barbearia na sua cidade..." />
        <img src={lupa} alt="" />
      </BarraPesquisa>
      <img src={lupa} alt="" />
    </Container>
  )
}

export default Header;