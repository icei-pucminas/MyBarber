import React from 'react'

import { HomeContainer, MainContainer, ImagemFundo } from "./styles";
import barbeiro from '../../assets/barbeiro.svg';

import Header from "../../components/Header";
import Button from "../../components/Button";

function Home() {
   return (
      <>
         <ImagemFundo />
         <Header />
         <MainContainer>
            <h1>
               Agende seu horário de maneira prática e rápida!
            </h1>
         </MainContainer>
         <HomeContainer>
            <section>
               <p>Procure as melhores barbearias da sua região facilmente com o MyBarber.</p>
               <Button>Entrar</Button>
               <Button>Cadastre-se</Button>
            </section>
            <img src={barbeiro} alt="Cliente na Barbearia" />
         </HomeContainer>
      </>
   )
}

export default Home;