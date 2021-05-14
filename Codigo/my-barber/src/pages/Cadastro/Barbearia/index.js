import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';

import GlobalStyle from '../../../styles/global';
import { Container } from './styles';

import Header from '../../../components/Header';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { FiBriefcase, FiMapPin, FiPhone } from 'react-icons/fi';

const CadastroBarbearia = () => {

    const history = useHistory();

    const dadosAnteriores = history.location.state;
    // Previne que o usuário acesse a rota sem ter passado pela outra etapa
    if (!dadosAnteriores) history.push("/cadastro");

    const handleRegister = useCallback(async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        for (var key in dadosAnteriores) {
            data.append(key, dadosAnteriores[key])
        }

        for (var pair of data.entries()) {
            dadosAnteriores[pair[0]] = pair[1];
            console.log(pair[0] + ', ' + pair[1]);
        }

        const response = await api.post('/barbearia', dadosAnteriores);
        console.log(response.data);
    }, [dadosAnteriores]);

    return (
        <Container>
            <GlobalStyle />
            <Header />
            <h1>Cadastro de Barbearia</h1>

            <form onSubmit={handleRegister}>
                <Input name="cep" placeholder="CEP" Icone={FiMapPin} required />
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