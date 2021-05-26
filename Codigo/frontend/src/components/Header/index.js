import React, { useContext, useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiSearch, FiMenu } from 'react-icons/fi';

import { Context } from '../../context/AuthContext';

import Sidebar from './Sidebar';

import { Container, BarraPesquisa, BemVindo } from './styles';
import Logo from '../Logo';

const Header = () => {
  const history = useHistory();
  const { authenticated, handleLogout } = useContext(Context);

  const user = authenticated && JSON.parse(localStorage.getItem('user'));

  const [city, setCity] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    history.listen((location) => {
      setShowSidebar(false);
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
    <>
      <Container>
        <Logo />
        {authenticated && (
          <BemVindo>
            <Link to="/perfil" >
              <img src={user.imagem} alt="Foto de Perfil" />
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
        <FiMenu size={48} onClick={() => setShowSidebar(!showSidebar)} visibility={authenticated ? 'visible' : 'collapse'} />
      </Container>
      <Sidebar user={user} show={showSidebar && authenticated} setShowSidebar={setShowSidebar} />
    </>
  )
}

export default Header;