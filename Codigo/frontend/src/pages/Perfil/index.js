import React, { useCallback } from 'react';
import { Field, Form, Formik } from 'formik';
import { FiUser, FiPhone, FiMail, FiLock, FiMapPin } from 'react-icons/fi';

import compareObjects from '../../helpers/compareObjects';

import { Container } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const DEFAULT_IMG = "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png";

const Perfil = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);

  const handleSubmit = useCallback((values, actions) => {
    const changedValues = compareObjects(values, user);

    if (Object.keys(changedValues).length === 0) alert("É necessário alterar pelo menos um valor.")
    console.log(changedValues);
  }, [user]);

  return (
    <Container>
      <section>
        <img src={DEFAULT_IMG} alt="Foto de Perfil" />
        <h1>Meu Perfil</h1>
      </section>
      <Formik onSubmit={handleSubmit} initialValues={{ ...user, senha: '', senhaConfirmacao: '' }}>
        <Form>
          <Field name="nome">
            {({ field }) => (
              <Input placeholder="Nome" Icone={FiUser} required {...field} />
            )}
          </Field>
          <Field name="email">
            {({ field }) => (
              <Input placeholder="E-mail" Icone={FiMail} type="email" required {...field} />
            )}
          </Field>
          <Field name="telefone">
            {({ field }) => (
              <Input placeholder="Telefone" Icone={FiPhone} type="tel" required {...field} />
            )}
          </Field>
          {
            user.telefoneFixo && (
              <Field name="telefoneFixo">
                {({ field }) => (
                  <Input placeholder="Telefone Fixo" Icone={FiPhone} type="tel" required {...field} />
                )}
              </Field>
            )
          }
          <Field name="senha">
            {({ field }) => (
              <Input placeholder="Senha" Icone={FiLock} type="password" {...field} />
            )}
          </Field>
          <Field name="senhaconfirmacao">
            {({ field }) => (
              <Input placeholder="Confirmar senha" Icone={FiLock} type="password" onPaste={e => e.preventDefault()} {...field} />
            )}
          </Field>
          {
            user.cnpj &&
            (
              <>
                <Field name="cep">
                  {({ field }) => (
                    <Input placeholder="CEP" minLength="8" Icone={FiMapPin} required {...field} />
                  )}
                </Field>
                <Field name="logradouro">
                  {({ field }) => (
                    <Input placeholder="Logradouro" Icone={FiMapPin} required {...field} />
                  )}
                </Field>
                <Field name="numero">
                  {({ field }) => (
                    <Input placeholder="Número" Icone={FiMapPin} type="numero" required {...field} />
                  )}
                </Field>
                <Field name="bairro">
                  {({ field }) => (
                    <Input placeholder="Bairro" Icone={FiMapPin} required {...field} />
                  )}
                </Field>
                <Field name="cidade">
                  {({ field }) => (
                    <Input placeholder="Cidade" Icone={FiMapPin} required {...field} />
                  )}
                </Field>
                <Field name="estado">
                  {({ field }) => (
                    <Input placeholder="Estado" Icone={FiMapPin} required {...field} />
                  )}
                </Field>
              </>
            )
          }
          <Button type="submit">Confirmar Alterações</Button>
        </Form>
      </Formik>
    </Container>
  )
};

export default Perfil;