import React from 'react';

import { Container } from './styles';

function Button({ children }) {
  return (
    <Container onClick={() => alert('EM CRIAÇÃO')}>
      {children}
    </Container>
  )
}

export default Button;