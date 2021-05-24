import React, { useContext, useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

import { Context } from '../../context/AuthContext';

import { Container, BarraPesquisa, BemVindo } from './styles';
import Logo from '../Logo';
import lupa from '../../assets/lupa.svg';

const DEFAULT_IMG = "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png";

const Header = () => {
  const history = useHistory();
  const { authenticated, handleLogout } = useContext(Context);

  const user = authenticated && JSON.parse(localStorage.getItem('user'));

  const [city, setCity] = useState("");

  useEffect(() => {
    history.listen((location) => {
      if (location.pathname !== "/barbearias") {
        setCity("");
      }
    })
  }, [history])

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/barbearias?cidade=${city}`);
  }

  return (
    <Container>
      <Logo />
      {authenticated && (
        <BemVindo>
          <Link to="/perfil" >
            <img src={DEFAULT_IMG} alt="Foto de Perfil" />
          </Link>
          <div>
            <p>Bem Vindo,</p>
            <span>{user.nome}</span>
            <button type="button" onClick={handleLogout}>Sair</button>
          </div>
        </BemVindo>
      )}
      <BarraPesquisa onSubmit={handleSubmit}>
        <input name="cidade" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Busque uma barbearia na sua cidade..." />
        <button type="submit"><FiSearch size={30} /></button>
      </BarraPesquisa>
      <img className={"menu"} src={lupa} alt="" />
    </Container>
  )
}

export default Header;