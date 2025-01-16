import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard Navigation</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;