import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import GlobalStyle from '../../styles/global';
import { Container } from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Seletor from '../../components/Seletor';

import { FiMail, FiLock, FiPhone, FiUser } from 'react-icons/fi';

const CadastroGeral = () => {
    const history = useHistory();
    const [tipoCliente, setTipoCliente] = useState(0);

    const handleRegister = useCallback((e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        data.append("tipo", tipoCliente);

        const dados = {
            nome: data.get("nome"),
            email: data.get("email"),
            telefone: data.get("telefone"),
            senha: data.get("senha"),
            tipo: tipoCliente
        }

        tipoCliente === 0 ? alert('Cadastrado!') : history.push('/cadastro/barbearia', dados)
    }, [history, tipoCliente]);


    return (
        <Container>
            <GlobalStyle />
            <Header />
            <h1>Cadastro</h1>

            <form onSubmit={handleRegister}>
                <Input name="nome" placeholder="Nome" Icone={FiUser} required />
                <Input name="email" placeholder="E-mail" Icone={FiMail} type="email" required />
                <Input name="telefone" placeholder="Telefone" Icone={FiPhone} type="tel" required />
                <Input name="senha" placeholder="Senha" Icone={FiLock} type="password" required />
                <Input name="senhaconfirmacao" placeholder="Confirmar senha" Icone={FiLock} type="password" onPaste={e => e.preventDefault()} required />
                <Seletor value={tipoCliente} onChange={setTipoCliente} />
                <Button type="submit">Registrar</Button>

            </form>
        </Container>
    )
}
export default CadastroGeral;