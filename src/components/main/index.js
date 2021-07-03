import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page404 from '../404';
import withContext from '../../HOC/withContext';

const Main = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <div>1</div>
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
