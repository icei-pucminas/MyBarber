import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 100px);

  h1 {
    font-size: 48px;
    color: white;
    margin-top: 25px;
    text-align: center;
  }

  > p {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    font-size: 24px;
    color: white;
  }
`;

export const CardContainer = styled.div`
  margin: 25px 0;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 25px;

  @media only screen and (max-width: 640px) {
    grid-template-columns: auto;
  }
`;