import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout} from './util/session_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});

window.login = login;
window.signup = signup;
window.logout = logout;