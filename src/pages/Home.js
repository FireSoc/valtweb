import React from 'react';
import { 
    auth, 
    db } from '../firebase.js';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { 
    //collection, 
    //addDoc,
    doc,
    setDoc } from 'firebase/firestore';
    


const Home = () => {
    const addNewUser = async () => {
        const user = auth.currentUser;
        if (!user) return;
      
        const userRef = doc(db, 'users', user.uid); // Use UID as document ID
        await setDoc(userRef, {
          name: user.displayName,
          email: user.email,
          timestamp: new Date()
        }, { merge: true }); // merge = don't overwrite existing fields
      };

    const navigate = useNavigate();

    const logout = async () => {
        await signOut(auth);
        navigate('/');
        alert('Logged out successfully!');
    };

    return (
        <div>
        <h1>Welcome!</h1>
        <button onClick={logout}>Logout</button>
        <button onClick={addNewUser}>Add Data</button>
        <p>Already have an account? <a href="./stats">Statistics</a></p>
        </div>
    );
};

export default Home;
