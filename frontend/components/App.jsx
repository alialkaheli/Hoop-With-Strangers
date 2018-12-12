import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/sign_up_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header className="home-tool-bar">
      <h1 className="logo">Hoop With Strangers</h1>
      <GreetingContainer />
    </header>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;