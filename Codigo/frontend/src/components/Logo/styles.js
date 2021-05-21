import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`

  display: flex;
  place-content: center;

  img {
    width: 57px;
  }
  h6 {
    font-size: 48px;
    font-weight: bold;
    color: white;
    margin: 0 15px;

  }
`;