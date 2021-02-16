import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Order from '../pages/Order';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Order} />
  </Switch>
);

export default Routes;
