import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page404 from '../404';
import RegisterUser from '../Register';
import LookUser from '../look';
import withContext from '../../HOC/withContext';

const Main = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <RegisterUser />
        </Route>
        <Route path="/look" exact>
          <LookUser />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default withContext(Main);
