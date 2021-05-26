import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: ${({ show }) => (show ? '350px' : '0px')};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? '100%' : '0%')};;
  background-color: #FF9000;

  display: flex;
  flex-direction: column;
  padding: 15px 25px;

  position: fixed;
  top: 0;
  right: 0;
  transition: 250ms;

  color: white;
  font-size: 24px;
  text-transform: uppercase;

  transition: width 0.5s, opacity 0.5s;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 3px solid white;

    svg {
      cursor: pointer;
      color: white;
      transition: color 0.2s;
      &:hover {
        color: #312E38;
      }
    }

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }

  nav {
    li {
      margin-bottom: 20px;

      a {
        color: white;
        transition: color 0.2s;
        white-space:nowrap;

        &:hover {
          color: #312E38;
        }
      }
    }
  }
`;

