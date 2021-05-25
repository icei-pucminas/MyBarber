import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 100px);

  filter: ${({ blur }) => (blur ? 'blur(10px)' : 'none')};

  transition: filter 0.1s;

  padding: 25px 150px;

  h1 {
    font-size: 48px;
    color: white;
  }

  & > button {
    margin-top: 25px;
    width: 750px;

    &:hover:disabled {
      background: #FF9000;
      color: #312E38;
    }

    &:disabled {
     cursor: auto; 
    }
  }
`;

export const CardFuncionario = styled.div`
  display: flex;
  align-items: center;

  margin-top: 25px;

  button:hover {
    color: white;
  }

  img {
    width: 160px;
    z-index: 2;
  }

  main {
    position: relative;
    right: 5%;
    z-index: 1;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    height: 120px;
    min-width: 700px;
    border-radius: 10px;
    padding: 15px 15px 15px 50px;

    background: #545454;

    p {
      align-self: flex-start;
      color: white;
      font-size: 24px;
      margin-bottom: 15px;

    }

    section {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      span {
        font-size: 18px;
        color: #FF9000;
      }

      button {
        background: transparent;
        transition: color 0.2s;
        margin-left: 10px;
        
        &:first-of-type {
          color: #FF9000;
        }

        color: #ff2a00;

        &:hover {
          color: white;
        }
      }
    }
  }
`;