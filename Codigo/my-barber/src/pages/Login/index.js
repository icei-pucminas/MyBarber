import React, { useState, useCallback } from 'react';
import api from '../../services/api';

import GlobalStyle from '../../styles/global';
import { Container } from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Seletor from '../../components/Seletor';

import { FiMail, FiLock } from 'react-icons/fi';

const Login = () => {

  const [tipoCliente, setTipoCliente] = useState(0);

  const handleLogin = useCallback(async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const dados = {
      email: data.get("email"),
      senha: data.get("password")
    }

    if (tipoCliente === 0) {
      try {
        await api.post('/cliente/auth', dados)
        alert("Logado!");
      } catch (error) {
        error.response && alert("E-mail/Senha incorretos!");
      }
    } else {
      try {
        await api.post('/barbearia/auth', dados)
        alert("Logado!");
      } catch (error) {
        error.response && alert("E-mail/Senha incorretos!");
      }
    }


  }, [tipoCliente]);

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <h1>Entrar</h1>

      <form onSubmit={handleLogin}>
        <Input name="email" placeholder="E-mail" Icone={FiMail} type="email" required />
        <Input name="password" placeholder="Senha" Icone={FiLock} type="password" required />
        <Seletor value={tipoCliente} onChange={setTipoCliente} />
        <Button type="submit">Continuar</Button>
      </form>

      <a href="/">Esqueci minha senha</a>
      <a href="/cadastro">Ainda não possui conta? Cadastre-se</a>
    </Container>
  )
}

export default Login;