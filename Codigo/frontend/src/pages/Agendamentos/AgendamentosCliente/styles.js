import styled from 'styled-components';

export const Card = styled.div`
  margin: 20px;
  display: flex;
  width: 850px;
  height: 130px;
  border-radius: 10px;
  background: #545454;

  box-shadow: -1px 0px 4px 4px rgba(0, 0, 0, 0.07);


  img {
    width: 30%;
    border-radius: 10px 0px 0px 10px;
  }

  div {
    padding: 10px;
    display: flex;
    flex-direction: column;

    span {
      font-size: 16px;
      color: #FF9000;
     }

    p {
      font-size: 24px;
      color: #FF9000;
      margin-bottom: 15px;
    }

    &:first-of-type {
      max-width: 30%;
      p {
      color: white;
      }
    }

    button {
      background: none;
      color: #ff2a00;
      font-weight: bold;
      position: relative;
      left: 60%;

      transition: color 0.2s;

      &:hover {
        color: white;
      }
    }
  }
`;