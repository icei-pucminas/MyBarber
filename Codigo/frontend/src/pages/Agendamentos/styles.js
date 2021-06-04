import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 100px);
  padding: 30px 0px;

  > main {
    display: grid;
    place-items: center;
    margin-bottom: 20px;

    img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
    }
    h1 {
      color: white;
      font-size: 32px;
    }
  }
`;

