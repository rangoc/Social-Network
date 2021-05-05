import React from 'react';
import './register.scss';
const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">KappaSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on KappaSocial
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" type="text" className="loginInput" />
            <input placeholder="Email" type="text" className="loginInput" />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
            />
            <input
              placeholder="Password Again"
              type="password"
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log Into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
