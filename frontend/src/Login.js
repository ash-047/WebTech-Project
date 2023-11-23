// Login.js
import React from 'react';
import './Login.css';

const Login = () => {
    return (
      <div className="left-half">
        <fieldset>
          <h3 id="PLTag">PESU Library</h3>
          <h1 id="LITag">Login</h1>
          <hr />
          <form align="center">
            PRN/SRN/email<sup>*</sup>
            <br />
            <input type="text" name="srnprnemail" placeholder="SRN/PRN/email" required />
            <br />
            Password*
            <br />
            <input type="password" name="pwd" placeholder="Password" required />
            <br/>
            <input type="button" value="Login" id="login" />
          </form>
        </fieldset>
      </div>
  );
};

export default Login;
