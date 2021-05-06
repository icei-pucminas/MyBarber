import { createGlobalStyle } from 'styled-components';

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
`;