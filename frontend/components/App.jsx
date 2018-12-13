import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/sign_up_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from '../util/auth_route';

const App = () => (
  <div className='home-content'>
    <header className="home-tool-bar">
    <h1 className="logo">Hoop With Strangers</h1>
      <GreetingContainer />
    </header>
    <div className="main-container">
      <div className="credentials-container">
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
      </div>
    </div>
  </div>
);

export default App;