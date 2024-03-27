import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './register.css'

const Register = () => {
  const [inputUserName, setInputUserName] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
 
  function generateCustomId() {
    const timestamp = Date.now().toString(36);
    const randomString = Math.random().toString(36).substring(2, 8);
    return timestamp + randomString;
}
const userId = generateCustomId();
  const handleFormSubmit = event => {
    event.preventDefault();
    if (!inputUserName || !inputEmail || !inputPassword) {
      setError('Please fill in all fields');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputEmail)) {
      setError('Please enter a valid email address');
      return;
    }

    // Check if user with the same email already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === inputEmail);
    if (existingUser) {
      setError('User with this email already exists');
      return;
    }

    const newUser = {
      userName: inputUserName,
      email: inputEmail,
      password: inputPassword,
      id:userId, // Generate a UUID
      Cart:[]
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Clear input fields and error message after successful submission
    setInputUserName('');
    setInputEmail('');
    setInputPassword('');
    setError('');
  };

  return (
    <div className="reg-container">
      <h1>Register Here</h1>
      <form className="reg-form" name="regForm">
        <input
          type="text"
          placeholder="Enter Name"
          name="userName"
          value={inputUserName}
          onChange={e => setInputUserName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={inputEmail}
          onChange={e => setInputEmail(e.target.value)}
        />{' '}
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={inputPassword}
          onChange={e => setInputPassword(e.target.value)}
        />
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button onClick={handleFormSubmit}>Sign in</button>
        <br />
        <button
          onClick={() => {
            navigate('/login');
          }}
        >
          Already Have a Account
        </button>
      </form>
    </div>
  );
};

export default Register;
