import React, { useState } from 'react';

import GlobalStyle from '../../styles/global';
import { Container } from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { FiMail, FiLock, FiPhone, FiUser } from 'react-icons/fi';
import Switch from 'react-input-switch';

const CadastroGeral = () => {

    const [tipoCliente, setTipoCliente] = useState(0);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");

    return (
        <Container>
            <GlobalStyle />
            <Header />
            <h1>Cadastro</h1>

            <form>
                <Input placeholder="Nome" Icone={FiUser} value={nome} onChange={e => setNome(e.target.value)} />
                <Input placeholder="E-mail" Icone={FiMail} value={email} onChange={e => setEmail(e.target.value)} type="email" />
                <Input placeholder="Telefone" Icone={FiPhone} value={telefone} onChange={e => setTelefone(e.target.value)} type="tel" />
                <Input placeholder="Senha" Icone={FiLock} value={senha} onChange={e => setSenha(e.target.value)} type="password" />
                <Input placeholder="Confirmar senha" Icone={FiLock} value={confirmaSenha} onChange={e => setConfirmaSenha(e.target.value)} type="password" onPaste={e => e.preventDefault()} />

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

                <Button type="submit">Registrar</Button>

            </form>
        </Container>
    )
}
export default CadastroGeral;