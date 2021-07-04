import React from 'react';
import PropTypes from 'prop-types';

import { Container, Icon, CustomInput, ErrorSpan } from './styles';

const RecursiveForm = ({ field, name, errorMessage, formik, type, icon }) => (
  <Container>
    {icon && <Icon className={`fas ${icon}`} />}
    <CustomInput
      minValue={14}
      maxValue={16}
      placeholder={name}
      data-cy={field}
      type={type}
      name={field}
    />
    {!formik.values[field] && formik.touched && formik.touched[field] && (
      <ErrorSpan min={12} max={12}>
        {errorMessage}
      </ErrorSpan>
    )}
  </Container>
);

RecursiveForm.propTypes = {
  field: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  formik: PropTypes.oneOfType([PropTypes.shape, PropTypes.object]).isRequired,
  icon: PropTypes.string,
};

export default RecursiveForm;
