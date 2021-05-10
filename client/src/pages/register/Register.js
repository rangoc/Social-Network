import axios from 'axios';
import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import './register.scss';
const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();
  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      console.log(user);
      try {
        await axios.post('/auth/register', user);
        history.push('/login');
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">KappaSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on KappaSocial
          </span>
        </div>
        <form className="loginRight" onSubmit={handleClick}>
          <div className="loginBox">
            <input
              placeholder="Username"
              type="text"
              className="loginInput"
              ref={username}
              required
            />
            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              ref={email}
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              minLength="6"
              ref={password}
              autoComplete="true"
              required
            />
            <input
              placeholder="Password Again"
              type="password"
              className="loginInput"
              ref={passwordAgain}
              autoComplete="true"
              required
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log Into Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
