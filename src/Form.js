import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    // Reset form fields
    setName('');
    setEmail('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label className="form-label">
        Name:
        <input
          className="form-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label className="form-label">
        Email:
        <input
          className="form-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <button className="form-button" type="submit">Submit</button>
    </form>
  );
  
};

export default Form;
