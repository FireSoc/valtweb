import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase.js';
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/Overview');
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/Overview');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div style={{
      maxWidth: 400,
      margin: "50px auto",
      padding: 30,
      border: "1px solid #ddd",
      borderRadius: 8,
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#fafafa",
      textAlign: "center"
    }}>
      <h2 style={{ marginBottom: 20, color: "#333" }}>Sign Up</h2>
      <form onSubmit={signUp} style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          style={{
            padding: 10,
            marginBottom: 15,
            borderRadius: 4,
            border: "1px solid #ccc",
            fontSize: 16,
            outline: "none",
            transition: "border-color 0.3s",
          }}
          onFocus={e => (e.target.style.borderColor = "#007BFF")}
          onBlur={e => (e.target.style.borderColor = "#ccc")}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="new-password"
          style={{
            padding: 10,
            marginBottom: 15,
            borderRadius: 4,
            border: "1px solid #ccc",
            fontSize: 16,
            outline: "none",
            transition: "border-color 0.3s",
          }}
          onFocus={e => (e.target.style.borderColor = "#007BFF")}
          onBlur={e => (e.target.style.borderColor = "#ccc")}
        />
        {error && <p style={{ color: "red", marginBottom: 15 }}>{error}</p>}
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: 12,
            backgroundColor: loading ? "#6c757d" : "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            fontSize: 16,
            cursor: loading ? "not-allowed" : "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={e => !loading && (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={e => !loading && (e.target.style.backgroundColor = "#007BFF")}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>

      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={loading}
        style={{
          marginTop: 15,
          width: "100%",
          padding: 12,
          backgroundColor: loading ? "#6c757d" : "#db4437",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          fontSize: 16,
          cursor: loading ? "not-allowed" : "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseEnter={e => !loading && (e.target.style.backgroundColor = "#a33226")}
        onMouseLeave={e => !loading && (e.target.style.backgroundColor = "#db4437")}
      >
        Sign in with Google
      </button>

      <p style={{ marginTop: 20, fontSize: 14, color: "#555" }}>
        Already have an account? <a href="/" style={{ color: "#007BFF", textDecoration: "none" }}>Login</a>
      </p>
    </div>
  );
};

export default Signup;
