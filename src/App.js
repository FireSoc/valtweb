import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Overview from './pages/Overview';
import NavBar from "./NavBar";

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return user ? children : <Navigate to="/Login" />;
};

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  <NavBar />

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={user ? <Navigate to="/Overview" /> : <Navigate to="/Login" />} />
        <Route path="/Login" element={!user ? <Login /> : <Navigate to="/Overview" />} />
        <Route path="/Signup" element={!user ? <Signup /> : <Navigate to="/Overview" />} />
        <Route path="/Overview" element={
          <ProtectedRoute>
            <Overview />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;