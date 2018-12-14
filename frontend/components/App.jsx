import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/sign_up_container';
import HomePage from './homepage/home_page';
import { Link, Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from '../util/auth_route';

import AllCities from './city/all_city_container';

const App = () => (
  <div className='home-content'>
    <header className="home-tool-bar">
    <Link to='/' className="logo"><h1>Hoop With Strangers</h1></Link>
      <GreetingContainer />
    </header>
    <div className="credentials-container">
      <Switch>
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          {/* <ProtectedRoute exact path='/cities' component={AllCities} /> */}
          <Route exact path="/" component={HomePage} />
      </Switch>
      </div>
    
  </div>
);

export default App;