import React, { useState } from 'react';
import axios from 'axios';
import '../Authform.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
  name, email, password
});

      alert("Registration successful!");
      console.log(res.data);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.response?.data?.error ||
        err.message ||
        "An unknown error occurred";
      alert("Error: " + errorMessage);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required /><br />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required /><br />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required /><br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
