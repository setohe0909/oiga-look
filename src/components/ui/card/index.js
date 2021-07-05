import React from 'react';
import PropTypes from 'prop-types';

import { Container, IMG, Field } from './styles';

const Card = ({ data }) => (
  <Container>
    <div>
      <Field>
        <strong>Nombre:</strong>
        {data.name}
      </Field>
      <Field>
        <strong>Apellidos:</strong>
        {data.lastName}
      </Field>
      <Field>
        <strong>Teléfono:</strong>
        {data.phone}
      </Field>
      <Field>
        <strong>Correo electrónico:</strong>
        {data.email}
      </Field>
      <Field>
        <strong>Dirección:</strong>
        {data.address}
      </Field>
    </div>
    <div>
      <IMG alt="look" src={data.image} />
    </div>
  </Container>
);

Card.propTypes = {
  data: PropTypes.shape,
};

Card.defaultProps = {
  data: {},
};

export default Card;
