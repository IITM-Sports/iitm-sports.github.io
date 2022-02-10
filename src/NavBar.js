import React from 'react';
import './NavBar.css';

function NavBar({setRoute}) {
  return (
    <nav className="navbar">
    <h1>Schoreter</h1>
    <div className="links">
      <button id='hoome' onClick={()=>setRoute("/")}>Home</button>
      <button id='leader' onClick={()=>setRoute("leaderboards")}>Leaderboards</button>
      <button id='schedule' onClick={()=>setRoute("schedule")}>Schedule</button>
    </div>
  </nav>);
}

export default NavBar;
