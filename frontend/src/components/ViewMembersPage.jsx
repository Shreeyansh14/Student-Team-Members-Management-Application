import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ViewMembersPage() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/members')
      .then(res => res.json())
      .then(setMembers);
  }, []);

  return (
    <div>
      {members.map((member) => (
        <div key={member._id}>
          <img src={`http://localhost:5000/uploads/${member.image}`} alt="profile" width="100" />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
          <Link to={`/member/${member._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}
