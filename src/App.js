import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Overview from './pages/Overview';
import StatsPage from './pages/statsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Overview" element={<Overview />} />
        <Route path="/statsPage" element={<StatsPage />} />
      </Routes>
    </Router>
  );
}

export default App;