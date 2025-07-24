import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
<<<<<<< Updated upstream
import Overview from './pages/Overview';
=======
import Home from './pages/Home';
import StatsPage from './pages/statsPage';
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
<<<<<<< Updated upstream
        <Route path="/home" element={<Overview />} />
=======
        <Route path="/home" element={<Home />} />
        <Route path="/stats" element={<StatsPage />} />
>>>>>>> Stashed changes
      </Routes>
    </Router>
  );
}

export default App;
