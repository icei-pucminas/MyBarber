import styled from 'styled-components';

export const Container = styled.div`
  width: 370px;
  height: 55px;

  background: #232129;
  border-radius: 10px;

  padding: 0 20px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    border: 0;
    flex: 1;  

    color: white;

    &::placeholder {
      color: #666360;
    }
  }
`;

