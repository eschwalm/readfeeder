import React from 'react';
import Provider from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SessionFormContainer from './session_form/session_form_container';
import HomePage from './home/home_page.jsx';
import MainPage from './main/main_page.jsx';

const App = (store) => (
  <div>

    <Switch>
      <ProtectedRoute path="/i" component={MainPage} />
      <AuthRoute exact path="/" component={HomePage} />
    </Switch>
  </div>
);

export default App;
