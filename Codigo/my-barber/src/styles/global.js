import { createGlobalStyle } from 'styled-components';

import pattern from '../assets/pattern.png';

export default createGlobalStyle`
  * {
     margin: 0;
     padding: 0;
     border: 0;
     outline: 0;
     box-sizing: border-box;
     font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family:'Roboto Slab', serif;
  }
  ol, ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
}

  body {
    -webkit-font-smoothing: antialiased;
    background-color: black;

    // IMAGEM DE FUNDO DAS PÁGINAS
    &::after {
      content: "";
      background-image: url(${pattern});
      background-attachment: fixed;
      background-size: 10%;
  
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -999;
      opacity: 0.05;
    }
  }
`;