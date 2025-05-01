import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MemberDetailsPage.css'; // Import the CSS file

export default function MemberDetailsPage() {
  const { id } = useParams();
  const [member, setMember] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/api/members/${id}`)
      .then(res => res.json())
      .then(setMember);
  }, [id]);

  return (
    <div className="member-page-container">
      <div className="member-card">
        <img
          src={`http://localhost:5000/uploads/${member.image}`}
          alt="Profile"
          className="member-image"
        />
        <h2 className="member-name">{member.name}</h2>
        <p className="member-info"><strong>Role:</strong> {member.role}</p>
        <p className="member-info"><strong>Email:</strong> {member.email}</p>
      </div>
    </div>
  );
}
