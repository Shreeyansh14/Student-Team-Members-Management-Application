import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Team Alpha</h1>
      <p>Welcome to the Team Members Management Portal</p>
      <Link to="/add">Add Member</Link> | <Link to="/view">View Members</Link>
    </div>
  );
}