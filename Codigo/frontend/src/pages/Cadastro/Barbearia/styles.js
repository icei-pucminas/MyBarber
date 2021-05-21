import styled from 'styled-components';

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: bold;
    color: white;
    font-size: 48px;
    margin: 10px;
    text-align: center;
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