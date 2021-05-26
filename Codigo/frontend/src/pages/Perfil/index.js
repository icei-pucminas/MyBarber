import React, { useCallback, useContext } from 'react';
import { Field, Form, Formik } from 'formik';
import { useHistory } from 'react-router'
import { FiUser, FiPhone, FiMail, FiLock, FiMapPin, FiImage } from 'react-icons/fi';
import { Context } from '../../context/AuthContext';

import compareObjects from '../../helpers/compareObjects';
import api from '../../services/api';

import { Container } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Perfil = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();
  const { handleLogout } = useContext(Context);

  const handleSubmit = useCallback(async (values, actions) => {
    const changedValues = compareObjects(values, user);
    console.log(changedValues)

    if (Object.keys(changedValues).length === 0) { alert("É necessário alterar pelo menos um valor."); return }

    try {
      await api.put(`/${user.cnpj ? 'barbearia' : 'cliente'}/${user.id}`, changedValues);
      alert("Editado com sucesso. Faça o login novamente!");
      handleLogout();
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro ao editar.");
    }

  }, [handleLogout, user]);

  return (
    <Container>
      <section>
        <img src={user.imagem} alt="Foto de Perfil" />
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
          <Field name="imagem">
            {({ field }) => (
              <Input placeholder="URL da Imagem" Icone={FiImage} {...field} />
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