import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 100px);

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