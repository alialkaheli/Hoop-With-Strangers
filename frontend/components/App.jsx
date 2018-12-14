import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/sign_up_container';
import HomePage from './homepage/home_page';
import { Link,Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from '../util/auth_route';

const App = () => (
  <div className='home-content'>
    <header className="home-tool-bar">
    <Link exact to='/' className="logo"><h1>Hoop With Strangers</h1></Link>
      <GreetingContainer />
    </header>
    <Switch>
      
        <div className="credentials-container">
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <Route exact path="/" component={HomePage} />
        </div>
        
      
      
    </Switch>
    
  </div>
);

export default App;