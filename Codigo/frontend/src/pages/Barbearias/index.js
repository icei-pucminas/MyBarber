import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import useQuery from '../../hooks/useQuery';
import { FiFrown } from "react-icons/fi";


import GlobalStyle from '../../styles/global';
import { Content, CardContainer, NaoTemarbearia } from './styles';

import Container from '../../components/Container';
import Header from '../../components/Header';
import Card from './Card';
import Pagination from './Pagination';

const DEFAULT_IMG = "https://exame.com/wp-content/uploads/2020/05/whatsapp-image-2020-05-12-at-10.47.30.jpg";
const CARDS_LIMIT = 6;

const Barbearias = () => {
  const query = useQuery();
  const cidade = query.get('cidade');

  const [barbearias, setBarbearias] = useState([]);
  const [naoTemBarbearia, setNaoTemBarbearia] = useState(false);
  const [teste, setTeste] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/barbearia', { params: { cidade } });
      setBarbearias(data);
    })();
  }, [cidade]);

  useEffect(() => {
    if(barbearias.length===0){
      setNaoTemBarbearia(true);
    }
    // Atualiza a lista de acordo com a paginação
    if (barbearias.length < offset) setOffset(0);
    setTeste(barbearias.slice(offset, (offset + CARDS_LIMIT)));
  }, [barbearias, offset]);



  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Content>
        <h1>Barbearias{cidade && ` em ${cidade}`}</h1>
      
        <CardContainer>
          {teste.map((barbearia) => (
            <Card key={barbearia.id}>
              <img src={DEFAULT_IMG} alt="Imagem Barbearia" />
              <div>
                <p>{barbearia.nome}</p>
                <span>{`${barbearia.logradouro}, nº${barbearia.numero},
                 ${barbearia.bairro}, ${barbearia.cidade} - ${barbearia.estado}`}</span>
              </div>
            </Card>
          ))}
        </CardContainer>
        {naoTemBarbearia&&
          <NaoTemarbearia>
            <p className="msg-nao-barbearia">Não possuem Barbearias na sua cidade cadastradas no MyBarber! <FiFrown size ={42} className = "icon-bad"/> </p>
          </NaoTemarbearia>
        }
        {barbearias.length > 0 &&
          <Pagination limit={CARDS_LIMIT} total={barbearias.length}
            offset={offset} setOffset={setOffset} />
        }
      </Content>
    </Container>
  )
};

export default Barbearias;