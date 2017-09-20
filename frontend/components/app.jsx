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
import Header from './home/home_header.jsx';

const App = () => (
  <div>
    <Header />
  </div>
);

export default App;
