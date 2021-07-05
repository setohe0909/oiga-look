import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

import RecursiveForm from '../recursive-form';
import SignupSchema from '../../schema/register';
import { registerFields } from './form';
import withContext from '../../HOC/withContext';

import { FormContainer, Paragraph, Button } from './styles';

const RegisterUser = withContext(({ context }) => {
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      address: '',
    },
    enableReinitialize: true,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      context.users.setAnyValue({
        values: { $set: values },
      });
      history.push('/look');
    },
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
              placeholder={item.placeholder}
              type={item.type}
              errorMessage={item.errorMessage}
              formik={formik}
              icon={item.icon}
            />
          ))}
          <Paragraph>
            Al presionar <strong>"Registrarme"</strong> estas de acuedo con
            nuestros{' '}
            <a
              href="https://www.termsandconditionsgenerator.com/live.php?token=YAvhKwBz7p0Soy0kFxt8ETlDVBCz8ICf"
              rel="noopener noreferrer"
              target="_blank"
            >
              terminos y condiciones de uso.
            </a>
          </Paragraph>
          <div>
            <Button type="submit">Registrarme</Button>
          </div>
        </FormContainer>
      </form>
    </>
  );
});

export default RegisterUser;
