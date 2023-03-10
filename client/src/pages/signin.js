import React, { useState } from "react";
import Header from "../components/header";
import "../css/login.css";
import logo from "../images/logoBlack.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  function updateForm(e) {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
    if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // When a post request is sent to the create url, we'll add a new record to the database.
    async function signUpJSON() {
      const response = await fetch("http://127.0.0.1:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const user = await response.json();
    }
    async function logInJSON() {
      const response = await fetch("http://127.0.0.1:4000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const user = await response.json();
      return user;
    }
    signUpJSON().then(() => {
      logInJSON().then((user) => {
        navigate(
          "about-you",
          { state: { email, token: user.token } },
          { replace: true }
        );
      });
    });
  };

  return (
    <motion.div
      className="loginPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src={logo} className="loginLogo" />
      <h2 className="welcomeSignup">Create Your Account</h2>
      <p className="pleaseNoteLogin">
        Please note that phone verification is required for signup. Your number
        will only be used to verify your identity for security purposes.
      </p>
      <form action="POST" onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => updateForm(e)}
          placeholder="Email address"
          className="emailLogin loginBtn"
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => updateForm(e)}
          placeholder="Password"
          className="passwordLogin loginBtn"
        />
        <input
          type="submit"
          className="submitLogin loginBtn signUpBtn"
          value="Continue"
        />
      </form>
      <div className="loginToSignup">
        <p className="dontLogin">Already have an account?</p>
        <Link to="../login" className="loginLinkToSignup">
          Log In
        </Link>
      </div>
    </motion.div>
  );
}

export default Signup;
