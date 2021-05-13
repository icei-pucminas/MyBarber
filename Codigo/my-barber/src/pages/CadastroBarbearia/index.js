import React, { useState } from 'react';

import GlobalStyle from '../../styles/global';
import { Container } from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { FiBriefcase, FiMapPin, FiPhone } from 'react-icons/fi';

const CadastroBarbearia = () => {

    const [CEP, setCEP] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [CNPJ, setCNPJ] = useState("");
    const [telefoneFixo, setTelefoneFixo] = useState("");


    return (
        <Container>
            <GlobalStyle />
            <Header />
            <h1>Cadastro de Barbearia</h1>

            <form>
                <Input placeholder="CEP" Icone={FiMapPin} value={CEP} onChange={e => setCEP(e.target.value)} />
                <Input placeholder="Logradouro" Icone={FiMapPin} value={logradouro} onChange={e => setLogradouro(e.target.value)} />
                <Input placeholder="Bairro" Icone={FiMapPin} value={bairro} onChange={e => setBairro(e.target.value)} />
                <Input placeholder="Cidade" Icone={FiMapPin} value={cidade} onChange={e => setCidade(e.target.value)} />
                <Input placeholder="Numero" Icone={FiMapPin} value={numero} onChange={e => setNumero(e.target.value)} type="number" />
                <Input placeholder="Estado" Icone={FiMapPin} value={estado} onChange={e => setEstado(e.target.value)} />
                <Input placeholder="CNPJ" Icone={FiBriefcase} value={CNPJ} onChange={e => setCNPJ(e.target.value)} type="number" />
                <Input placeholder="Telefone Fixo" Icone={FiPhone} value={telefoneFixo} onChange={e => setTelefoneFixo(e.target.value)} />

                <Button type="submit">Registrar</Button>
            </form>
        </Container>
    )
}
export default CadastroBarbearia;