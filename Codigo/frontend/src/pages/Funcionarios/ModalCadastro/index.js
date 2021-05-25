import React from 'react';
import { Field, Form, Formik } from 'formik';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container } from './styles';

import { FiLock, FiUser, FiWatch, FiX } from 'react-icons/fi';

const DEFAULT_IMG = "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png";

const ModalCadastro = ({ funcionario, show, handleClose }) => {

  const initialValues = {
    nome: '',
    telefone: '',
    foto: DEFAULT_IMG,
    horaInicio: '',
    horaFim: ''
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Container show={show}>
      <h1><FiX size={36} onClick={handleClose} />Cadastro de Funcionário</h1>
      <img src={funcionario.foto ? funcionario.foto : DEFAULT_IMG} alt="Barbeiro" />
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
          <Field name="horaInicio">
            {({ field }) => (
              <Input placeholder="Horário Inicial" Icone={FiWatch} required {...field} />
            )}
          </Field>
          <Field name="horaFim">
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