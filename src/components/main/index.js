import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page404 from '../404';
import RegisterUser from '../Register';
import LookUser from '../look';

const Main = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);

export default Main;
