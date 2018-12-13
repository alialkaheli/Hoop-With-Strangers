import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/sign_up_container';
import { Link,Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from '../util/auth_route';

const App = () => (
  <div className='home-content'>
    <header className="home-tool-bar">
    <Link to='/' className="logo"><h1>Hoop With Strangers</h1></Link>
      <GreetingContainer />
    </header>
    <Switch>
      <div className="main-container">
        <div className="credentials-container">
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </div>
        <div className="background-pic"></div>
      </div>
    </Switch>
  </div>
);

export default App;