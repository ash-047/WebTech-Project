import React from "react";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  let [SRN, setSRN] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(SRN, password);
      let response = await axios.post("http://localhost:2000/auth/login", {
        SRN: SRN,
        password: password,
      });
      if (response.data) {
        console.log(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/MyProfile");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="left-half">
      <fieldset>
        <h3 id="PLTag">PESU Library</h3>
        <hr color="black" className="line" />
        <br />
        <h1 id="LITag">Login</h1>
        <form align="center">
          <br />
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              color: "#000000",
              animation: "slideIn 0.7s ease-out",
            }}
          >
            PRN/SRN <sup>*</sup>
          </p>
          <br />
          <input
            type="text"
            name="srnprnemail"
            placeholder="SRN/PRN"
            required
            onChange={(e) => {
              setSRN(e.target.value);
            }}
          />
          <br />
          <br />
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              color: "#000000",
              animation: "slideIn 0.7s ease-out",
            }}
          >
            Password <sup>*</sup>
          </p>
          <br />
          <input
            type="password"
            name="pwd"
            placeholder="Password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <input
            type="button"
            value="Login"
            id="login"
            onClick={handleLogin}
          />
          <br />
        </form>
      </fieldset>
    </div>
  );
}
