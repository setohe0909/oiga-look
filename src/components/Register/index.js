import React from 'react';
import { useFormik } from 'formik';

import RecursiveForm from '../recursive-form';
import SignupSchema from '../../schema/register';
import { registerFields } from './form';

import { FormContainer } from './styles';

const RegisterUser = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      database: '',
      query: '',
      collection: '',
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      // code...
    },
    validationSchema: SignupSchema,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <FormContainer>
          {registerFields.map((item) => (
            <RecursiveForm
              key={item.id}
              name={item.name}
              field={item.field}
              type={item.type}
              errorMessage={item.errorMessage}
              formik={formik}
            />
          ))}
          <p>
            Al presionar "Registrarme" estas de acuedo con nuestros{' '}
            <a href="/" rel="noopener noreferrer" target="_blank">
              terminos y condiciones de uso
            </a>
          </p>
          <div>
            <button type="submit">Registrarme</button>
          </div>
        </FormContainer>
      </form>
    </>
  );
};

export default RegisterUser;
