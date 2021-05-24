import styled from 'styled-components';

export const Container = styled.button`

  min-width: ${({ tamanho }) => tamanho ? '175px' : '370px'};
  height: 55px;
  border-radius: 10px;

  background-color: #FF9000;

  font-size: 20px;
  font-weight: bold;
  color: #312E38;

  transition: all 0.2s;

  &:hover {
    background-color: #FCAF54;
    color: white;
  }
`;