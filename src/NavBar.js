import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
    <h1>Heading-Nav</h1>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/Results">Results</Link>
      <Link to="/Schedule">Schedule</Link>
      <Link to="/Leaderboard">Leaderboard</Link>
    </div>
  </nav>);
}

export default NavBar;
