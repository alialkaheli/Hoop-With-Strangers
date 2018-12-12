import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
      <nav>
        <Link to="/login">Login</Link>
        &nbsp;or&nbsp;
        <Link to="/signup">Sign up!</Link>
        &nbsp;or&nbsp;
        <Link to="/">Home</Link>
      </nav>
    );
    const personalGreeting = () => (
      <hgroup>
        <h2>Hi, {currentUser.fname}!</h2>
        <button onClick={logout}>Log Out</button>
      </hgroup>
    );
  
    return currentUser ? personalGreeting() : sessionLinks();
  };
  
  
  export default Greeting;