import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiMail, FiLock, FiPhone, FiUser } from 'react-icons/fi';

import api from '../../services/api';

import { Container } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Seletor from '../../components/Seletor';


const CadastroGeral = () => {
    const history = useHistory();
    const [tipoCliente, setTipoCliente] = useState(0);

    const cadastrar = useCallback(async (dados) => {
        try {
            await api.post('/cliente', dados);
            alert("Cadastro realizado!");
            history.push('/login');
        } catch (error) {
            error.response && alert(error.response.data.mensagem);
        }
    }, [history]);

    const handleRegister = useCallback((e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        const dados = {
            nome: data.get("nome"),
            email: data.get("email"),
            telefone: data.get("telefone"),
            senha: data.get("senha"),
        }

        tipoCliente === 0 ? cadastrar(dados) : history.push('/cadastro/barbearia', dados)
    }, [cadastrar, history, tipoCliente]);

    return (
        <Container>
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