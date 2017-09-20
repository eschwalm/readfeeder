import React from 'react';
import Provider from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import HomePage from './home/home_page.jsx';

const App = () => (
  <div>
    <HomePage />
  </div>
);

export default App;
