import React from 'react';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const DEFAULT_IMG = "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png";

const Sidebar = ({ user, show, setShowSidebar }) => {

  const isBarber = user.cnpj;

  return (
    <Container show={show}>
      <div>
        <FiX size={42} onClick={() => setShowSidebar(false)} />
        <span>Menu</span>
        <Link to="/perfil"><img src={user.imagem} alt="Foto de Perfil" /></Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/agendamentos">Meus Agendamentos</Link></li>
          <li><Link to="/perfil">Meu Perfil</Link></li>
          {isBarber ? (
            <li><Link to="/funcionarios">Meus Funcionários</Link></li>
          ) : (
            <li><Link to="/barbearias">Barbearias</Link></li>
          )}
        </ul>
      </nav>
    </Container>
  )
};

export default Sidebar;