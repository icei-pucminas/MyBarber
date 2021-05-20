import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';

import GlobalStyle from '../../../styles/global';
import { Container } from './styles';

import Header from '../../../components/Header';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { FiBriefcase, FiMapPin, FiPhone } from 'react-icons/fi';
import axios from 'axios';

const CadastroBarbearia = () => {

    const history = useHistory();

    const dados = history.location.state;
    // Previne que o usuário acesse a rota sem ter passado pela outra etapa
    if (!dados) history.push("/cadastro");

    const getCEP = async (e) => {
        const value = e.target.value;
        const cep = value?.replace(/[^0-9]/g, '');

        if (cep?.length !== 8) return;

        try {
            const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }

    const handleRegister = useCallback(async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        for (var pair of data.entries()) {
            // Adiciona os dados do formulário com os dados antigos
            dados[pair[0]] = pair[1];
        }

        try {
            await api.post('/barbearia', dados);
            alert("Cadastro realizado!");
        } catch (error) {
            error.response && alert(error.response.data.mensagem);
        }
    }, [dados]);

    return (
        <Container>
            <GlobalStyle />
            <Header />
            <h1>Cadastro de Barbearia</h1>

            <form onSubmit={handleRegister}>
                <Input name="cep" placeholder="CEP" minLength="8" Icone={FiMapPin} onBlur={getCEP} required />
                <Input name="logradouro" placeholder="Logradouro" Icone={FiMapPin} required />
                <Input name="bairro" placeholder="Bairro" Icone={FiMapPin} required />
                <Input name="cidade" placeholder="Cidade" Icone={FiMapPin} required />
                <Input name="numero" placeholder="Numero" type="number" Icone={FiMapPin} required />
                <Input name="estado" placeholder="Estado" Icone={FiMapPin} required />
                <Input name="cnpj" placeholder="CNPJ" Icone={FiBriefcase} required />
                <Input name="telefoneFixo" placeholder="Telefone Fixo" Icone={FiPhone} required />

                <Button type="submit">Registrar</Button>
            </form>
        </Container>
    )
}
export default CadastroBarbearia;