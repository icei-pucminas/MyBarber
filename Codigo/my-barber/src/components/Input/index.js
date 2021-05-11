import React from 'react';

import { Container } from './styles';

const Input = ({ nome, Icone }) => (
  <Container>
    <input type="text" placeholder={nome} />
    <Icone color="#666360" size={20} />
  </Container>
);

export default Input;