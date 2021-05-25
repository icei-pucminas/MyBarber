import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 50vh;
  min-width: 50vh;
  border-radius: 10px;

  padding: 35px;
  background: #2F2F2F;

  h1 {
    display: flex;
    align-items: center;
    font-size: 36px;
    color: #FF9000;

    svg {
      cursor: pointer;
      margin-right: 20px;
      color: #ff2a00;
      transition: color 0.2s;
      
      &:hover {
        color: white;
      }
    }
  }
  
  img {
    width: 100px;
    margin: 25px 0px;
  }

  button {
    margin-top: 25px;
  }
`;