import React from 'react';
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-title">Stop Harassment</div>
        </div>

        <div className="navbar-middle">
          <a href="/" className="navbar-link">Home</a>
          <a href="/complain" className="navbar-link">Complain</a>
          <a href="/donate" className="navbar-link">Donation</a>
    
        </div>

        <div className="navbar-right">
          <a href="/login" className="navbar-signin">Sign In</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
