import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 100px;

  padding: 0 130px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: rgba(0,0,0, 0.75);
  
  .menu{
    visibility: collapse;
  }

  border-bottom: solid 3px #FF9000;
`;

export const BarraPesquisa = styled.form`
  position: relative;
  right: 5%;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 700px;
  height: 50px;

  border-radius: 10px;
  padding: 14px;

  background-color: #FF9000; 
  margin: 30px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  button {
    background: none;
    
    svg {
      color: white;
      transition: all 0.2s;

      &:hover {
        color: black;
      }
    }
  }


  form {
    width: 100%;
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

export const BemVindo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;

  img {
    width: 75px;
    margin: 10px;
  }

  div {
    display: flex;
    flex-direction: column;

    p {
      color: white;
      font-size: 16px;
    }

    span {
      color: #FF9000;
      font-size: 16px;
      font-weight: bold;
    }

    button {
      align-self: flex-start;
      background: none;
      font-size: 14px;
      font-weight: bold;
      text-decoration: underline;
      color: #ff2a00;
      transition: color 0.2s;
      
      &:hover {
        color: white;
      }
    }
  }
`;