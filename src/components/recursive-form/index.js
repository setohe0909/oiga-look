import React from 'react';
import PropTypes from 'prop-types';

import { FieldForm, InputTitle, CustomInput, ErrorSpan } from './styles';

const RecursiveForm = ({ field, name, errorMessage, formik, type }) => (
  <>
    <FieldForm>
      <InputTitle minValue={14} maxValue={16} htmlFor={field}>
        {name}
      </InputTitle>
    </FieldForm>
    <CustomInput
      minValue={14}
      maxValue={16}
      data-cy={field}
      type={type}
      name={field}
    />
    {!formik.values[field] && formik.touched && formik.touched[field] && (
      <ErrorSpan min={12} max={12}>
        {errorMessage}
      </ErrorSpan>
    )}
  </>
);

RecursiveForm.propTypes = {
  field: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  formik: PropTypes.oneOfType([PropTypes.shape, PropTypes.object]).isRequired,
};

export default RecursiveForm;
