import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import IndexComponent from './components/index_component';
import Sample from './components/sample';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={IndexComponent} />
    <Route path='sample' component={Sample} />
  </Route>
);
