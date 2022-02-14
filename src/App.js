import NavBar from './NavBar';
import Home from './Home';
import './App.css';
import Leaderboard from './Leaderboard';
import Schedule from './Schedule';
import React from 'react';
function App() {
  const [route, setRoute] = React.useState("/");
  const [leaderboardData, setLeaderboardData] = React.useState(null);
  const [scheduleData, setSchedule] = React.useState(null);
  React.useEffect(() => {
    fetch('https://schroeter-backend.herokuapp.com/leaderboard').then(res => res.json()).then(data => setLeaderboardData(data));
    fetch('https://schroeter-backend.herokuapp.com/schedule').then(res => res.json()).then(data => setSchedule(data));
  }, [])
  return (
    <div className="App">
      <NavBar setRoute={setRoute} />
      <div className="content">
        {route === "/" && <Home />}
        {route === "leaderboards" && leaderboardData && <Leaderboard data={leaderboardData} />}
        {route === "schedule" && scheduleData && <Schedule data={scheduleData} />}
      </div>
    </div>
  );
}

export default App;
