import styled from 'styled-components';

export const Container = styled.button`
  width: 175px;
  height: 50px;
  border-radius: 10px;

  background-color: #FF9000;

  font-size: 20px;
  font-weight: bold;

  transition: all 0.2s;

  &:hover {
    background-color: #FCAF54;
    color: white;
  }
`;