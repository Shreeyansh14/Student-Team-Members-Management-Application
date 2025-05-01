import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MemberDetailsPage() {
  const { id } = useParams();
  const [member, setMember] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/api/members/${id}`)
      .then(res => res.json())
      .then(setMember);
  }, [id]);

  return (
    <div>
      <img src={`http://localhost:5000/uploads/${member.image}`} width="200" alt="profile" />
      <h2>{member.name}</h2>
      <p>Role: {member.role}</p>
      <p>Email: {member.email}</p>
    </div>
  );
}
