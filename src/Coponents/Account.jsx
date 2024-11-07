import React, { useState } from 'react';

function Account({ user }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = (e) => {
    e.preventDefault();
    alert(`Account updated: Name - ${name}, Email - ${email}`);
  };

  return (
    <div>
      <h2>Account Information</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Account;
