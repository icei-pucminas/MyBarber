import React, { useContext, useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Context } from '../../context/AuthContext';

import Logo from '../Logo';
import { Container, BarraPesquisa, BemVindo } from './styles';
import lupa from '../../assets/lupa.svg';
import { FiSearch } from 'react-icons/fi';

const DEFAULT_IMG = "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png";

function Header() {
  const history = useHistory();
  const { authenticated } = useContext(Context);

  const [user, setUser] = useState({});

  useEffect(() => {
    if (authenticated) {
      const currentUser = JSON.parse(localStorage.getItem('user'));
      setUser(currentUser);
    }
  }, [authenticated])


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const cidade = data.get('cidade');

    history.push(`/barbearias?cidade=${cidade}`)
  }

  return (
    <Container>
      <Logo />
      {
        authenticated && (
          <BemVindo>
            <Link to="/perfil" >
              <img src={DEFAULT_IMG} alt="Foto de Perfil" />
            </Link>
            <div>
              <p>Bem Vindo,</p>
              <span>{user.nome}</span>
            </div>
          </BemVindo>
        )
      }
      <BarraPesquisa onSubmit={handleSubmit}>
        <input name="cidade" placeholder="Busque uma barbearia na sua cidade..." />
        <button type="submit"><FiSearch size={30} /></button>
      </BarraPesquisa>
      <img className={"menu"} src={lupa} alt="" />
    </Container>
  )
}

export default Header;