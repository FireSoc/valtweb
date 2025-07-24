import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../App.css';

const StatsPage = () => {
  const vitalsData = [
    { id: 1, value: 95, label: 'Vitality' },
    { id: 2, value: 82, label: 'Sleep' },
    { id: 3, value: 74, label: 'DH' },
    { id: 4, value: 80, label: 'HR' },
    { id: 5, value: 100, label: 'BP' }
  ];

  return (
    <div className="dashboard">
      <div className="summary">
        <p>
          Your vitals are doing great so far. Sleep, heart rate, and blood pressure scores 
          indicate that you are well rested and low stressed. However, dehydration scores 
          indicate the need for more water. Keep up the good work!
        </p>
      </div>

      <div className="vitals-container">
        {vitalsData.map((vital) => (
          <div key={vital.id} className="vital-card">
            <div className="gauge-wrapper">
              <CircularProgressbar
                value={vital.value}
                text={`${vital.value}`}
                styles={buildStyles({
                  textSize: '24px',
                  pathColor: `rgba(62, 152, 199, ${vital.value / 100})`,
                  textColor: '#000',
                  trailColor: '#f0f0f0',
                  backgroundColor: '#fff',
                })}
              />
            </div>
            <div className="vital-label">{vital.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsPage;