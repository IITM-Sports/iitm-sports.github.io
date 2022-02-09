import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar({setRoute}) {
  return (
    <nav className="navbar">
    <h1>Heading-Nav</h1>
    <div className="links">
      <button onClick={()=>setRoute("/")}>Home</button>
      <button onClick={()=>setRoute("leaderboards")}>Leaderboards</button>
      <button onClick={()=>setRoute("schedule")}>Schedule</button>
    </div>
  </nav>);
}

export default NavBar;
