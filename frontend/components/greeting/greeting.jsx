import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
      <nav className="toolbar-buttons">
        <nav className="button-color">
          <Link className ="button" to="/login">Login</Link>
          
          <Link className ="button" to="/signup">Sign up</Link>
          
        </nav>
        <div className="frontpage">
        </div>
      </nav>
      
    );
    const personalGreeting = () => (
      <nav>
        <h2>Hi, {currentUser.fname}!</h2>
        <button onClick={logout}>Log Out</button>
      </nav>
    );
  
    return currentUser ? personalGreeting() : sessionLinks();
  };
  
  
  export default Greeting;