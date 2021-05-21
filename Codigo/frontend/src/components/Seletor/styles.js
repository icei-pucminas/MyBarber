import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
    gap: 10px;

    .switch {
      transform: scale(1.5);
    }
    label {
      font-size: 24px;
      font-weight: 500;
      color: white;
    }
`;

export default Container;