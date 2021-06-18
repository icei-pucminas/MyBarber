import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  height: 55px;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background-color: #232129;

  svg {
    color: #FF9000;
  }

  select {
    margin-left: 10px;
    flex: 1;
    background: none;
    color: white;

    option {
      color: black
    }
  }
`;
