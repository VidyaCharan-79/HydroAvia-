import React, { useState } from 'react';

function Signin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // handle login logic here
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Login</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Login</button>
    </form>
  );
}

// Inline styles
const formStyle = {
  maxWidth: '300px',
  margin: '50px auto',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  background: '#f7f7f7'
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px'
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#2196F3',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default Signin;
