import React from 'react';
import { useFormik } from 'formik';

import SignupSchema from '../../schema/register';
import { FormContainer } from './styles';

const RegisterUser = () => {
  const formik = useFormik({
    initialValues: {
      datasource_name: '',
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
        <FormContainer>assa</FormContainer>
      </form>
    </>
  );
};

export default RegisterUser;
