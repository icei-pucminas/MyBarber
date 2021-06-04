import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #2F2F2F;
  flex: 1;
  padding: 20px;
  border-radius: 10px;

  .react-calendar {
    border-radius: 10px;
  }

  main {
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    gap: 10px;
  }
`;

export const SeletorFuncionario = styled.div`
  width: 600px;
  height: 55px;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background-color: #232129;

  svg {
    color: #FF9000;
  }

  select {
    margin-left: 10px;
    flex: 1;
    background: none;
    color: white;

    option {
      color: black
    }
  }
`;

export const TabelaAgendamentos = styled.div`
  width: 600px;
  flex: 1;
  background-color: #232129;
  border-radius: 10px;

  table {
    width: 100%;
    border-collapse:separate; 
    border-spacing: 5px;
    th {
      padding: 10px;
      text-align: center;
      color: #FF9000;
    }
    
    tr {
      margin: 10px;
    }
    td {
      text-align: center;
      color: white;
    }
  }
`;