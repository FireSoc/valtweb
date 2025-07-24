// Whoop.js (updated)
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';

const clientId = 'b3fe5282-388e-4628-8078-4d4d1d4fb559';
const redirectUri = 'http://localhost:3000/overview';
const whoopAuthUrl = `https://api.prod.whoop.com/oauth/oauth2/auth`;

const Whoop = () => {
  const [status, setStatus] = useState('Not connected');

  useEffect(() => {
    const handleOAuthCallback = async (code) => {
      try {
        const res = await fetch('https://api.prod.whoop.com/oauth/oauth2/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            code: code,
            grant_type: 'authorization_code',
            client_id: clientId,
            client_secret: 'aaf949d28c0977a00b7f61202de08eed3711609296b351d0a37a50d2336685bd',
            redirect_uri: redirectUri
          })
        });

        const tokenData = await res.json();
        const user = auth.currentUser;
        if (!user) return;

        // Store tokens in Firestore
        await setDoc(doc(db, 'users', user.uid), {
          whoopTokens: {
            accessToken: tokenData.access_token,
            refreshToken: tokenData.refresh_token
          }
        }, { merge: true });

        setStatus('Connected to WHOOP!');
        fetchWhoopData(tokenData.access_token);

      } catch (err) {
        console.error('OAuth callback error:', err);
        setStatus('Failed to connect to WHOOP');
      }
    };

    const fetchWhoopData = async (accessToken) => {
      try {
        const user = auth.currentUser;
        if (!user) return;

        const res = await fetch('https://api.prod.whoop.com/v2/recovery', {
          headers: { Authorization: `Bearer ${accessToken}` }
        });

        const data = await res.json();

        for (const entry of data.recovery) {
          await addDoc(collection(db, `users/${user.uid}/metrics`), {
            device: 'whoop',
            timestamp: new Date(entry.timestamp),
            recoveryScore: entry.recovery_score,
            restingHeartRate: entry.resting_heart_rate,
            hrv: entry.hrv
          });
        }
      } catch (err) {
        console.error('Data fetch error:', err);
      }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      handleOAuthCallback(code);
    }
  }, []);

  return (
    <div>
      <h2>Connect WHOOP to Your Dashboard</h2>
      <p>Status: {status}</p>
      <button onClick={() => window.location.href = whoopAuthUrl}>
        Connect WHOOP
      </button>
    </div>
  );
};

export default Whoop;
