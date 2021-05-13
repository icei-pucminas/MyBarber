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
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <h1>Entrar</h1>

      <form>
        <Input placeholder="E-mail" Icone={FiMail} value={email} onChange={e => setEmail(e.target.value)} type="email" />
        <Input placeholder="Senha" Icone={FiLock} value={senha} onChange={e => setSenha(e.target.value)} type="password" />

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