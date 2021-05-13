import React from 'react';

import { Container } from './styles';

const Input = ({ nome, Icone, ...rest }) => (
  <Container>
    <input type="text" {...rest} />
    <Icone color="#666360" size={20} />
  </Container>
);

export default Input;