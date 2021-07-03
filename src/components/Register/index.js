import React, { useState } from 'react';
import { useFormik } from 'formik';

import RecursiveForm from '../recursive-form';
import CustomModal from '../ui/modal';

import SignupSchema from '../../schema/register';
import { registerFields } from './form';

import { FormContainer } from './styles';

const RegisterUser = () => {
  const [showModal, setShowmodal] = useState(false);

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
            Al presionar <strong>"Registrarme"</strong> estas de acuedo con
            nuestros
            <a href="/" rel="noopener noreferrer" target="_blank">
              terminos y condiciones de uso.
            </a>
          </p>
          <div>
            <button type="button" onClick={() => setShowmodal(!showModal)}>
              Registrarme
            </button>
          </div>
        </FormContainer>
      </form>

      {showModal && (
        <CustomModal
          dimension="small"
          modalStatus={true}
          callbackLeftBtn={() => setShowmodal(!showModal)}
          modalTitle="Succes....."
        >
          example...
        </CustomModal>
      )}
    </>
  );
};

export default RegisterUser;
