import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    color: white;
    margin-bottom: 25px;

  button {
    display: flex;
    align-items: center;
    background: none;
    color: white;

    &:hover {
      color: #FF9000;
    }
    &:disabled {
      color: grey;
    }
  }
  span {
    margin: 0 10px;
  }
`;