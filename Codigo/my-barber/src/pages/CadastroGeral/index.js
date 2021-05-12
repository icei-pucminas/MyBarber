import React, { useState } from 'react';

import GlobalStyle from '../../styles/global';
import { Container } from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { FiMail, FiLock, FiPhone } from 'react-icons/fi';
import Switch from 'react-input-switch';



const CadastroGeral = () => {

    const [tipoCliente, setTipoCliente] = useState(0);

    return (
        <Container>
            <GlobalStyle />
            <Header />
            <h1>Cadastro</h1>

            <form>
                <Input nome="Nome" Icone={FiMail} />
                <Input nome="E-mail" Icone={FiMail} />
                <Input nome="Telefone" Icone={FiPhone} />
                <Input nome="Senha" Icone={FiLock} />
                <Input nome="Confirmar senha" Icone={FiLock} />

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