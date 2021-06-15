import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  min-height: calc(100vh - 100px);

  main {
    display: flex;
    width: 50%;
    height: 130px;
    margin: 25px;

    img {
      width: 30%;
      border-radius: 10px;
    }

    div {
      padding: 10px;
      display: flex;
      flex-direction: column;
    }

    p {
      font-size: 24px;
      color: white;
    }
    span {
      font-size: 16px;
      color: #FF9000;
    }
  }

  section {
    display: flex;
    flex: 1;
    gap: 20px;
    background-color: #2F2F2F;    
    padding: 20px;
    border-radius: 10px;

    .react-calendar {
      border-radius: 10px;
    }

    > div:last-child {
      > div {
        display: flex;
      }
    }
  }
`;

export const Horario = styled.button`
    width: 100px;
    height: 60px;
    margin: 20px 20px 0px 0px;
    border-radius: 12px;
    background-color: #545454;

    display: grid;
    place-content: center;

    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: hover 0.2s;
    
    &:hover {
      transform: scale(1.05);
    }
`;