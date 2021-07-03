import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page404 from '../404';
import RegisterUser from '../Register';
import withContext from '../../HOC/withContext';

const Main = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <RegisterUser />
          </Route>
          <Route path="/integrations" exact>
            <div>2</div>
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default withContext(Main);
