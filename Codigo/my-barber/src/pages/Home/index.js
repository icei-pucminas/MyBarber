import React from 'react'
import {HomeContainer, ImagemFundo, Titulo} from "./styles";
import Header from "../../components/Header";

function Home(){
   return (
        <React.Fragment>
            <ImagemFundo>
               <Header />
               <Titulo>
                   <h2>Agende seu horário de<br/> maneira prática e rápida</h2>
               </Titulo>
            </ImagemFundo>
            <HomeContainer>
               <p>Procure as melhores barbearias da sua região facilmente com o MyBarber.</p>
           </HomeContainer>
        </React.Fragment>
   )
}

export default Home;