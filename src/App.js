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
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
