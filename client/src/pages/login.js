import React, { useState } from "react";
import Header from "../components/header";
import "../css/login.css";
import logo from "../images/logoBlack.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function LogIn() {
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
    async function logInJSON() {
      const response = await fetch(
        "https://ehrboost.herokuapp.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const user = await response.json();
      return user;
    }

    logInJSON().then((user) => {
      navigate(
        "../home",
        { state: { email, token: user.token } },
        { replace: true }
      );
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
      <h2 className="welcomeLogin">Welcome Back</h2>
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
        <Link to="forgot-password" state={email} className="forgotPassword">
          Forgot password?
        </Link>
        <input
          type="submit"
          className="submitLogin loginBtn"
          value="Continue"
        />
      </form>
      <div className="loginToSignup">
        <p className="dontLogin">Don't have an account?</p>
        <Link to="../signup" className="loginLinkToSignup">
          Sign up
        </Link>
      </div>
    </motion.div>
  );
}

export default LogIn;
