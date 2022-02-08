import NavBar from './NavBar';
import Home from './Home';
import './App.css';
import Results from './Results';
import Leaderboard from './Leaderboard';
import Schedule from './Schedule';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/Results" element={<Results/>}/>
            <Route path="/Leaderboard" element={<Leaderboard/>}/>
            <Route path="/Schedule" element={<Schedule/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
