import React from 'react';
import { Field, Form, Formik } from 'formik';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container } from './styles';

import { FiLock, FiMail, FiWatch, FiX } from 'react-icons/fi';

const ModalCadastro = ({ funcionario }) => {

  return (
    <Container>
      <h1><FiX size={36} />Cadastro de Funcionário</h1>
      <img src={funcionario.foto} alt={funcionario.nome} />
      <Formik>
        <Form>
          <Field name="nome">
            {({ field }) => (
              <Input placeholder="Nome" Icone={FiMail} required {...field} />
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
          <Button>Cadastrar</Button>
        </Form>
      </Formik>
    </Container>
  )
}

export default ModalCadastro;