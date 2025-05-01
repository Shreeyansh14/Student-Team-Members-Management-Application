import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ViewMembersPage.css'; // Import the CSS file

export default function ViewMembersPage() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/members')
      .then(res => res.json())
      .then(setMembers);
  }, []);

  return (
    <div className="view-members-container">
      <h2 className="page-title">Team Members</h2>
      <div className="members-grid">
        {members.map((member) => (
          <div className="member-card" key={member._id}>
            <img
              src={`http://localhost:5000/uploads/${member.image}`}
              alt="profile"
              className="member-thumb"
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <Link to={`/member/${member._id}`} className="details-link">
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
