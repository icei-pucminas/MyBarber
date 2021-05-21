import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  width: 570px;
  height: 130px;
  border-radius: 10px;
  background: #545454;
  cursor: pointer;

  img {
    width: 50%;
    border-radius: 10px 0px 0px 10px;
  }

  div {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  p {
    font-size: 24px;
    color: white;
  }
  span {
    font-size: 16px;
    color: #FF9000;
  }

  @media only screen and (max-width: 640px) {
    width: 350px;
    
    p {
      font-size: 18px;
    }
    span {
      font-size: 14px;
    }
  }
`;

export default Card;