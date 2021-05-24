import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: bold;
    font-size: 48px;
    color: white;
    margin-top: 25px;
    text-align: center;
  }
`;
export const NaoTemarbearia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  p {
    font-size: 24px;
    color: white;
    margin-top: 285px;
    text-align: center;
  }
  .icon-bad {

  }
`

export const CardContainer = styled.div`
  margin: 25px 0;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 25px;

  @media only screen and (max-width: 640px) {
    grid-template-columns: auto;
  }
`;