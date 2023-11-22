// Login.js
import React from 'react';
import './Login.css';

const Login = () => {
    return (
      <div className="left-half">
        <fieldset>
          <h3 id="PLTag">PESU Library</h3>
          <h1 id="LITag">Login</h1>
          <button id="SignInGoogle">
            <img src="GoogleImg.png" height="15" width="15" alt="Google Logo" />
            Sign In With Google
          </button>
          <hr />
          <form align="center">
            PRN/SRN<sup>*</sup>
            <br />
            <input type="text" name="srnprn" placeholder="SRN/PRN" required />
            <br />
            Password*
            <br />
            <input type="password" name="pwd" placeholder="Password" required />
            <br />
            <input type="checkbox" name="rememberme" id="rem_me" />
            Remember me?
            <input type="button" value="Forgot Password?" id="for_pwd" />
            <br />
            <input type="button" value="Login" id="login" />
          </form>
        </fieldset>
      </div>
  );
};

export default Login;
