import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="toolbar-buttons">
          <nav className="button-color">
            <Link className ="button" to="/login">Login</Link>
            
            <Link className ="button" to="/signup">Sign up</Link>
          </nav>
        </nav>
        
    );
    const personalGreeting = () => (
      <nav className="toolbar-buttons">
        <nav className="button-color">
          <button className ="button1" onClick={logout}>Log Out</button>
        </nav>
      </nav>
    );
  
    return currentUser ? personalGreeting() : sessionLinks();
  };
  
  
  export default Greeting;