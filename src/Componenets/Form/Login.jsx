import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { userContext } from '../ContextProvider/UserProvider';
import './login.css';

const Login = () => {
  //const { user, setUser } = useContext(userContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
   // console.log(email, password);
    let users = JSON.parse(localStorage.getItem('users'));
    //console.log(users);
    let loggedInUser = users.find(user => user.email === email && user.password === password);
    if (!loggedInUser) {
      alert('Invalid User');
    } else {
      alert('Welcome ' + loggedInUser.userName);
      setUser(loggedInUser);
     // console.log('New User', loggedInUser);
      navigate('/products');
    }
  };

  return (
    <div className="login-container">
      <h1>Login Here</h1>
      <form className="login-form">
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Login</button>
        <button
          onClick={() => {
            navigate('/reg');
          }}
        >
          Create a New Account
        </button>
      </form>
    </div>
  );
};

export default Login;
