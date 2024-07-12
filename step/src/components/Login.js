// import React, { useState } from 'react';
// import axios from 'axios';
// import './Register.css';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/register', { email, password });
//       console.log(res.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="register">
//       <h1>Register</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          navigate('/home');
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
