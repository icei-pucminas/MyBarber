import styled from 'styled-components';

export const Content = styled.div`
  flex: 1;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  section {
    margin-bottom: 25px;
    img {
      width: 160px;
      border-radius: 50%;
    }
    h1 {
      color: white;
      font-size: 32px;
      font-weight: bold;
    }
  }

  form {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;

    div {
      margin-top: 0;
    }
    
    button {
      // not working
      grid-column: auto / span 2;

      justify-content: center;
    }

    @media only screen and (max-width: 640px) {
      grid-template-columns: auto;
    }
  }
  padding: 25px;
`;