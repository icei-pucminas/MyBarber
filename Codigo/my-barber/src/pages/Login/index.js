import React, { useCallback, useContext } from 'react';
import { Context } from '../../context/AuthContext';

import GlobalStyle from '../../styles/global';
import { Container } from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { FiMail, FiLock } from 'react-icons/fi';


const Login = () => {
  const { handleLogin } = useContext(Context);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const dados = {
      email: data.get("email"),
      senha: data.get("password")
    }

    handleLogin(dados);
  }, [handleLogin]);

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <h1>Entrar</h1>

      <form onSubmit={handleSubmit}>
        <Input name="email" placeholder="E-mail" Icone={FiMail} type="email" required />
        <Input name="password" placeholder="Senha" Icone={FiLock} type="password" required />
        <Button type="submit">Continuar</Button>
      </form>

      <a href="/">Esqueci minha senha</a>
      <a href="/cadastro">Ainda não possui conta? Cadastre-se</a>
    </Container>
  )
}

export default Login;