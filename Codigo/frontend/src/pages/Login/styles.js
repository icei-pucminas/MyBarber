import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 100px);

  h1 {
    font-weight: bold;
    color: white;
    font-size: 48px;
    margin: 10px;
  }

  a:first-of-type  {
    color: white;
  }

  a {    
    margin-top: 15px;
    font-weight: 500;
    color: #FF9000;
  }
`;