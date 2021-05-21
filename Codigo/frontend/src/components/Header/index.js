import React from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../Logo';

import { Container } from './styles';
import { BarraPesquisa } from './styles';

import lupa from '../../assets/lupa.svg';


function Header() {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const cidade = data.get('cidade');

    history.push(`/barbearias?cidade=${cidade}`)
  }

  return (
    <Container>
      <Logo />
      <BarraPesquisa onSubmit={handleSubmit}>
        <input name="cidade" placeholder="Busque uma barbearia na sua cidade..." />
        <img src={lupa} alt="" />
      </BarraPesquisa>
      <img className={"menu"} src={lupa} alt="" />
    </Container>
  )
}

export default Header;