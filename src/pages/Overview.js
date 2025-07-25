import React from 'react';
import '../App.css';
import NavBar from "../NavBar";

const CircleChart = ({ title, value, maxValue, unit, color, size = 'normal' }) => {
  const percentage = (value / maxValue) * 100;
  const radius = size === 'large' ? 70 : 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const svgSize = size === 'large' ? 180 : 120;
  const center = svgSize / 2;
  const strokeWidth = size === 'large' ? 12 : 8;

  return (
    <div className={`circle-chart-container ${size === 'large' ? 'featured' : ''}`}>
      <div className="circle-chart">
        <svg width={svgSize} height={svgSize}>
          <circle cx={center} cy={center} r={radius} stroke="#e0e0e0" strokeWidth={strokeWidth} fill="transparent" />
          <circle
            cx={center} cy={center} r={radius}
            stroke={color} strokeWidth={strokeWidth} fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${center} ${center})`}
            style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
          />
        </svg>
        <div className="chart-content">
          <span className={`chart-value ${size === 'large' ? 'large' : ''}`}>{value}</span>
          <span className={`chart-unit ${size === 'large' ? 'large' : ''}`}>{unit}</span>
        </div>
      </div>
      <h3 className={`chart-title ${size === 'large' ? 'large' : ''}`}>{title}</h3>
    </div>
  );
};

export default function StatsPage() {
  return (
    <div className="App" style={{ margin: 0, padding: 0 }}>
      <div className="hero-section">
        <div className="floating-element">
          <div style={{width: '100px', height: '100px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%'}}></div>
        </div>
        <div className="hero-text">
          <h1 className="hero-title">Your Daily Stats</h1>
          <div className="featured-metric">
            <CircleChart title="Overall Vitality Score" value={0} maxValue={100} color="#4CAF50" size="large" />
          </div>
          <div className="metrics-grid">
            <CircleChart title="Sleep Score" value={0} maxValue={100} unit=" pts" color="#5889e4ff" />
            <CircleChart title="Recovery Score" value={0} maxValue={100} unit=" pts" color="#b79e55ff" />
            <CircleChart title="Total Strain" value={0} maxValue={50} unit="/50" color="#dd4242ff" />
            <CircleChart title="Posture Score" value={0} maxValue={100} unit=" pts" color="#96CEB4" />
          </div>
        </div>
      </div>
      <div className="container" style={{ 
        padding: '40px 20px',
        backgroundColor: '#a5cda7ff',
        textAlign: 'center'
      }}>
        <button style={{ backgroundColor: '#617764ff', border: 'none', color: 'white', padding: '20px 42px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '20px', borderRadius: '15px', marginBottom: '25px' }}>
          More Stats
        </button>
        <p style={{ color: '#666', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Questions? Contact our Customer Support at customers@valthealth.org.
        </p>
      </div>
    </div>
  );
}
