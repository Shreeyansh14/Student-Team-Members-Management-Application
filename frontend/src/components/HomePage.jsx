import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

export default function HomePage() {
  return (
    <div className="home-container">
      <h1 className="home-title">🚀 Team Alpha</h1>
      <p className="home-subtitle">Welcome to the Team Members Management Portal</p>
      <div className="home-links">
        <Link to="/add" className="home-link">➕ Add Member</Link>
        <span className="divider">|</span>
        <Link to="/view" className="home-link">👥 View Members</Link>
      </div>
    </div>
  );
}
