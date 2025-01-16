import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Dashboard</h1>
      <nav className="header-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><a href="#logout">Logout</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;