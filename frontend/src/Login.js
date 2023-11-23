import React from 'react';
import './Login.css';

const Login = () => {
    return (
      <div className="left-half">
        <fieldset>
          <h3 id="PLTag">PESU Library</h3>
          <hr color="black" className="line"/>
          <br />
          <h1 id="LITag" >Login</h1>
          <form align="center">
            <br />
            <p style={{ textAlign: 'center', fontSize: '20px', color: '#000000', animation: 'slideIn 0.7s ease-out' }}>PRN/SRN/email <sup>*</sup></p>
            <br />
            <input type="text" name="srnprnemail" placeholder="SRN/PRN/email" required />
            <br />
            <br />
            <p style={{ textAlign: 'center', fontSize: '20px', color: '#000000', animation: 'slideIn 0.7s ease-out' }}>Password <sup>*</sup></p>
            <br />
            <input type="password" name="pwd" placeholder="Password" required />
            <br/>
            <input type="button" value="Login" id="login" />
            <br/>
          </form>
        </fieldset>
      </div>
  );
};

export default Login;
