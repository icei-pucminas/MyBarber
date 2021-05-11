import React from 'react';

import bigode from '../../assets/bigode.svg';
import Container from './styles';

const Logo = () => (
  <Container>
    <img src={bigode} alt="" />
    <h6>MyBarber</h6>
  </Container>
)

export default Logo;