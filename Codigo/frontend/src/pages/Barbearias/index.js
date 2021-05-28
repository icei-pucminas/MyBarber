import React, { useState, useEffect } from 'react';
import { FiFrown } from "react-icons/fi";

import api from '../../services/api';
import useQuery from '../../hooks/useQuery';

import { Container, CardContainer } from './styles';
import Card from './Card';
import Pagination from './Pagination';

const DEFAULT_IMG = "https://exame.com/wp-content/uploads/2020/05/whatsapp-image-2020-05-12-at-10.47.30.jpg";
const CARDS_LIMIT = 6;

const Barbearias = () => {

  const query = useQuery();
  const cidade = query.get('cidade');

  const [barbearias, setBarbearias] = useState([]);
  const [barbeariasPagina, setBarbeariasPagina] = useState([]);
  const [offset, setOffset] = useState(0);
  const temBarbearia = barbearias.length > 0;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/barbearia', { params: { cidade } });
        setBarbearias(data);
      } catch {
        setBarbearias([]);
      }
    })();
  }, [cidade]);

  useEffect(() => {
    if (barbearias.length < offset) setOffset(0);
    setBarbeariasPagina(barbearias.slice(offset, (offset + CARDS_LIMIT)));
  }, [barbearias, offset]);



  return (
    <Container>
      <h1>Barbearias{cidade && ` em ${cidade}`}</h1>

      <CardContainer>
        {barbeariasPagina.map((barbearia) => (
          <Card key={barbearia.id}>
            <img src={barbearia.imagem} alt="Imagem Barbearia" />
            <div>
              <p>{barbearia.nome}</p>
              <span>{`${barbearia.logradouro}, nº${barbearia.numero},
                 ${barbearia.bairro}, ${barbearia.cidade} - ${barbearia.estado}`}</span>
            </div>
          </Card>
        ))}
      </CardContainer>
      {temBarbearia ? (
        <Pagination limit={CARDS_LIMIT} total={barbearias.length}
          offset={offset} setOffset={setOffset} />
      ) : (
        <p><FiFrown size={42} className="icon-bad" />Não possuem Barbearias na sua cidade cadastradas no MyBarber!</p>
      )}
    </Container>
  )
};

export default Barbearias;