import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase.js';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Overview");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const loginWithGoogle = async () => {
    setError("");
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/Overview");
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
      <img
        src="/1.png"
        alt="Vault Logo"
        style={{
          width: 150,
          height: 150,
          marginBottom: 20,
        }}
      />

      <form onSubmit={loginUser} style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
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
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
          autoComplete="current-password"
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
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>

      <button
        type="button"
        onClick={loginWithGoogle}
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
        Log in with Google
      </button>

      <p style={{ marginTop: 20, fontSize: 14, color: "#555" }}>
        Don't have an account? <a href="/signup" style={{ color: "#007BFF", textDecoration: "none" }}>Sign up</a>
      </p>
    </div>
  );
};

export default Login;
