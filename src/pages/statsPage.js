import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../App.css';

const StatsPage = () => {
  const getColor = (value) => {
    if (value >= 80) return '#4CAF50';  
    if (value >= 50) return '#FFC107';  
    return '#F44336';                   
  };

  const vitalsData = [
    { id: 1, value: 95, label: 'Vitality' },
    { id: 2, value: 82, label: 'Sleep' },
    { id: 3, value: 74, label: 'DH' },
    { id: 4, value: 66, label: 'HR' },
    { id: 5, value: 31, label: 'BP' }
  ];

  return (
    <div className="dashboard">
      <div className="summary">
        <p>
          Your vitals are cooked and ur lwk dead, gg!
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
                  pathColor: getColor(vital.value),
                  textColor: getColor(vital.value),
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