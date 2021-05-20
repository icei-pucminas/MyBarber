import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import useQuery from '../../hooks/useQuery';

import GlobalStyle from '../../styles/global';
import { Content, CardContainer } from './styles';

import Container from '../../components/Container';
import Header from '../../components/Header';
import Card from './Card';

const Barbearias = () => {
  const query = useQuery();
  const cidade = query.get('cidade');

  const [barbearias, setBarbearias] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/barbearia', { params: { cidade } });
      setBarbearias(data);
    })();
  }, [cidade]);

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Content>
        <h1>Barbearias</h1>
        <CardContainer>
          {barbearias.map((barbearia) => (
            <Card key={barbearia.id}>
              <img src="https://exame.com/wp-content/uploads/2020/05/whatsapp-image-2020-05-12-at-10.47.30.jpg" alt="Imagem Barbearia" />
              <div>
                <p>{barbearia.nome}</p>
                <span>{barbearia.logradouro}, nº{barbearia.numero}, {barbearia.bairro}, {barbearia.cidade} - {barbearia.estado}</span>
              </div>
            </Card>
          ))}
        </CardContainer>
      </Content>
    </Container>
  )
};

export default Barbearias;