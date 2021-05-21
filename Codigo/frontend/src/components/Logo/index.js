import React, { useContext } from 'react';
import { Context } from '../../context/AuthContext';

import bigode from '../../assets/bigode.svg';
import Container from './styles';

const Logo = () => {
  const { authenticated } = useContext(Context);
  return (
    <Container to="/">
      <img src={bigode} alt="" />
      {!authenticated && <h6>MyBarber</h6>}
    </Container>
  )
}

export default Logo;