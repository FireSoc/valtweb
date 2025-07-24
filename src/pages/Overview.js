import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import Whoop from './Whoop';

const Overview = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  // 🔽 Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setUserData(userSnap.data());
      } else {
        console.warn('No user data found.');
      }
    };

    fetchUserData();
  }, []);

  const logout = async () => {
    await signOut(auth);
    navigate('/');
    alert('Logged out successfully!');
  };

  return (
    <div>
      <h1>Welcome to your Data Overview!</h1>
      {userData ? (
        <div>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Joined:</strong> {new Date(userData.timestamp.seconds * 1000).toLocaleString()}</p>
        </div>
      ) : (
        <p>Loading your data...</p>
      )}
      <button onClick={logout}>Logout</button>
      <Whoop />
    </div>
  );
};

export default Overview;
