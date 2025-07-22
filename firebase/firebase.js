// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getAuth,
    GoogleAuthProvider
 } from "firebase/auth";
 import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8i9w1hxF_i-baxtAKrNGpdPpKjTmxRAA",
  authDomain: "valtweb-8ccfc.firebaseapp.com",
  projectId: "valtweb-8ccfc",
  storageBucket: "valtweb-8ccfc.firebasestorage.app",
  messagingSenderId: "197178839795",
  appId: "1:197178839795:web:301570937315a27a7e9d86",
  measurementId: "G-1LC7T3EVMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Call the function to add a user (e.g., when a button is clicked)
// addNewUser();


