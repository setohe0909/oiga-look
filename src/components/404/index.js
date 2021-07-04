import React from 'react';

import NotFound from '../../assets/img/404.png';
import { Page404Container } from './styles';

const Page404 = () => {
  return (
    <Page404Container>
      <strong>No encontramos lo que buscabas.</strong>
      <img alt="Not found" src={NotFound} />
    </Page404Container>
  );
};

export default Page404;
