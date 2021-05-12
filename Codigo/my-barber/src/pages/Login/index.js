import React, { useState } from 'react';

import GlobalStyle from '../../styles/global';
import { Container } from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { FiMail, FiLock } from 'react-icons/fi';
import Switch from 'react-input-switch';


const Login = () => {

  const [tipoCliente, setTipoCliente] = useState(0);

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <h1>Entrar</h1>

      <form>
        <Input nome="E-mail" Icone={FiMail} />
        <Input nome="Senha" Icone={FiLock} />

        <div className="tipo">
          <label htmlFor="tipo-cliente">Cliente</label>
          <Switch value={tipoCliente} onChange={setTipoCliente} className="switch" styles={{
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
        </div>

        <Button type="submit">Continuar</Button>
      </form>

      <a href="/">Esqueci minha senha</a>
      <a href="/">Ainda não possui conta? Cadastre-se</a>
    </Container>
  )
}

export default Login;