import React, { useState } from 'react';
import { useFormik } from 'formik';

import RecursiveForm from '../recursive-form';
import CustomModal from '../ui/modal';

import SignupSchema from '../../schema/register';
import { registerFields } from './form';

import { FormContainer, Paragraph, Button } from './styles';

const RegisterUser = () => {
  const [showModal, setShowmodal] = useState(false);

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
    onSubmit: async (values) => {
      console.log('🚀 ~ file: index.js ~ line 26 ~ onSubmit: ~ values', values);
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

      {showModal && (
        <CustomModal
          dimension="small"
          modalStatus={true}
          callbackLeftBtn={() => setShowmodal(!showModal)}
          modalTitle="Succes....."
          rightButtonTxt="Cerrar"
        >
          example...
        </CustomModal>
      )}
    </>
  );
};

export default RegisterUser;
