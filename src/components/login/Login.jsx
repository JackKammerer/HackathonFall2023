import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './login.scss';
import axios from 'axios';

function Login() {
  const [isResponseTrue, setIsResponseTrue] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    
      // Make a fetch request to your backend using the relative URL.
      const dataToSend = {
        username: email,
        password: password,
      };
      
      const apiUrl = 'http://localhost:3000/login'; // Replace with your actual backend endpoint URL

// Send the POST request with the data
      axios
        .post(apiUrl, dataToSend)
        .then((response) => {
          
          // Handle a successful response from the server
          if(response.data===true){
            setIsResponseTrue(true);
          }
          
        })
        .catch((error) => {
          // Handle errors
          console.error('Error:', error);
        });
      
      // Set up the fetch request with the POST method and request headers
      
  } 
  
  return (
    <div>
      <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2>LOGIN</h2>
            <Link to="/createaccount">Don't have an account yet?</Link>
          </div>
          <form method="post" className="form">
            <label htmlFor="user-email" style={{ paddingTop: '13px' }}>
              &nbsp;Email
            </label>
            <input
              id="user-email"
              className="form-content"
              type="email"
              name="email"
              autoComplete="on"
              required
              value={email}
              onChange={handleEmailChange}
            />
            <div className="form-border"></div>
            <label htmlFor="user-password" style={{ paddingTop: '22px' }}>
              &nbsp;Password
            </label>
            <input
              id="user-password"
              className="form-content"
              type="password"
              name="password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            <div className="form-border"></div>
            {!isResponseTrue && (
              <button type="button" id="submit-btn" onClick={handleLogin}>
              Check
            </button>
            )}
            
            {isResponseTrue && (
              <button type="button" id="submit-btn" onClick={handleLogin}>
              <Link to="/homepage">
                Go to Homepage
              </Link>
              </button>
              
            )}

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
