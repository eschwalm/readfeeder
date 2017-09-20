import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as SessionAPIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  
  ReactDOM.render(<Root store={store}/>, root);
});

window.login = SessionAPIUtil.login;
window.signup = SessionAPIUtil.signup;
window.logout = SessionAPIUtil.logout;
