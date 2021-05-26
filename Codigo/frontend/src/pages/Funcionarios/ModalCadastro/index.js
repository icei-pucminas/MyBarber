import React, { useCallback } from 'react';
import { useHistory } from 'react-router'
import { Field, Form, Formik } from 'formik';
import { FiLock, FiUser, FiWatch, FiX, FiImage } from 'react-icons/fi';

import validateURL from '../../../helpers/validateURL';
import compareObjects from '../../../helpers/compareObjects';
import api from '../../../services/api';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container } from './styles';

const DEFAULT_IMG = "https://image.freepik.com/fotos-gratis/homem-confiante-barbeiro-profissional-com-uma-tesoura-cabeleireiro-elegante-na-barbearia-publicidade-e-barbearia-conceito_167187-244.jpg";

const ModalCadastro = ({ funcionario, show, handleClose, idBarbearia }) => {
  const history = useHistory();
  const initialValues = {
    nome: '',
    telefone: '',
    imagem: '',
    horarioInicial: '',
    horarioFinal: ''
  };

  const handleSubmit = useCallback(async (values, actions) => {
    console.log('hello')
    const { id } = funcionario;
    const changedValues = compareObjects(values, funcionario);

    if (id) {
      // Editando funcionário
      try {
        if (Object.keys(changedValues).length === 0) {
          alert("É necessário alterar pelo menos um valor.");
          return;
        };
        await api.put(`/funcionario/${id}`, changedValues);
        history.go(0);
      } catch (error) {
        console.log(error);
        alert("Ocorreu um erro ao editar o funcionário");
      }
    } else {
      try {
        await api.post('/funcionario', { idBarbearia, ...changedValues });
        history.go(0);
      } catch (error) {
        console.log(error);
        alert("Ocorreu um erro ao criar o funcionário");
      }
    }
  }, [funcionario, history, idBarbearia]);

  return (
    <Container show={show}>
      <h1><FiX size={36} onClick={handleClose} />Cadastro de Funcionário</h1>
      <img src={funcionario.imagem ? funcionario.imagem : DEFAULT_IMG} alt="Barbeiro" />
      <Formik onSubmit={handleSubmit} enableReinitialize initialValues={funcionario.nome ? { ...funcionario } : initialValues}  >
        <Form>
          <Field name="nome">
            {({ field }) => (
              <Input placeholder="Nome" Icone={FiUser} required {...field} />
            )}
          </Field>
          <Field name="telefone">
            {({ field }) => (
              <Input placeholder="Telefone" Icone={FiLock} required {...field} />
            )}
          </Field>
          <Field name="imagem">
            {({ field }) => (
              <Input placeholder="URL da Imagem" Icone={FiImage} {...field} />
            )}
          </Field>
          <Field name="horarioInicial">
            {({ field }) => (
              <Input placeholder="Horário Inicial" Icone={FiWatch} required {...field} />
            )}
          </Field>
          <Field name="horarioFinal">
            {({ field }) => (
              <Input placeholder="Horário Final" Icone={FiWatch} required {...field} />
            )}
          </Field>
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Formik>
    </Container>
  )
}

export default ModalCadastro;