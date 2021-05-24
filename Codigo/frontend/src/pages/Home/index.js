import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/AuthContext';

import { HomeContainer, MainContainer, ImagemFundo } from "./styles";
import GlobalStyle from '../../styles/global';

import barbeiro from '../../assets/barbeiro.svg';

import Button from "../../components/Button";

const Home = () => {
   const { authenticated } = useContext(Context);

   return (
      <>
         <GlobalStyle homePage />
         <ImagemFundo />
         <MainContainer>
            <h1>
               Agende seu horário de maneira prática e rápida!
            </h1>
         </MainContainer>
         <HomeContainer>
            <section>
               <p>Procure as melhores barbearias da sua região facilmente com o MyBarber.</p>
               {!authenticated && (
                  <>
                     <Link to="/login"><Button pequeno>Entrar</Button></Link>
                     <Link to="/cadastro/"><Button pequeno>Cadastre-se</Button></Link>
                  </>
               )}
            </section>
            <img src={barbeiro} alt="Cliente na Barbearia" />
         </HomeContainer>
      </>
   )

};

export default Home;