import React from 'react';

export default function AddMemberPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    await fetch('http://localhost:5000/api/members', {
      method: 'POST',
      body: formData
    });
    
    alert("Member added!");
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input name="name" placeholder="Name" required />
      <input name="role" placeholder="Role" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="image" type="file" accept="image/*" required />
      <button type="submit">Add Member</button>
    </form>
  );
}
