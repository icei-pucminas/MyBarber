import React from 'react';
import Switch from 'react-input-switch';
import Container from './styles';

const Seletor = ({ ...rest }) => (
  <Container>
    <label htmlFor="tipo-cliente">Cliente</label>
    <Switch {...rest} className="switch" styles={{
      track: {
        backgroundColor: '#232129'
      },
      trackChecked: {
        backgroundColor: '#232129'
      },
      button: {
        backgroundColor: '#FF9000'
      },
      buttonChecked: {
        backgroundColor: '#FF9000'
      }
    }}
    />
    <label htmlFor="tipo-cliente">Barbearia</label>
  </Container>

);

export default Seletor;