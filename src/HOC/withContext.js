import React from 'react';

import { GeneralContext } from '../context';

const WithContext = (Component) => {
  const ContextConsumer = (props) => (
    <GeneralContext.Consumer>
      {(context) => <Component {...props} context={context || {}} />}
    </GeneralContext.Consumer>
  );

  return ContextConsumer;
};

export default WithContext;
