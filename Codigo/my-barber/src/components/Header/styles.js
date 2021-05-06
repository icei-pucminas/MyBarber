import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 100px;

  padding: 0 130px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: black;
  opacity: 75%;
  .menu{
    visibility: collapse;
  }

  border-bottom: solid 3px #FF9000;
`;

export const BarraPesquisa = styled.form`

  position: relative;
  right: 5%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 700px;
  height: 50px;

  border-radius: 10px;
  padding: 14px;

  background-color: #FF9000; 
  
  img {
    width: 32px;
  }

  input {
    background: none;

    font-size: 18px;
    color: white;
    width: 100%;

    &::placeholder {
      font-size: 18px;
      color: white;
    }
  }

`;

