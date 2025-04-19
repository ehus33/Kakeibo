import React from 'react';
import './Nav.css';

const Nav = ({ onLogout, onToggleDarkMode }) => {
  return (
    <nav>
      <button className="nav-button" onClick={onLogout}>Logout</button>
      <button className="nav-button">Activities</button>
      <button className="nav-button" onClick={onToggleDarkMode}>Change Appearance</button>
    </nav>
  );
};

export default Nav;
