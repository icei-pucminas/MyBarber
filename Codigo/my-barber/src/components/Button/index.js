import React from 'react';

import { Container } from './styles';

function Button({ children, pequeno, ...rest }) {
  return (
    <Container tamanho={pequeno} type="button" {...rest}>
      {children}
    </Container>
  )
}

export default Button;