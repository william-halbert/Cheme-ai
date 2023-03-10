import React, { useState } from "react";
import "../../css/login.css";
import logo from "../../images/logoBlack.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function PrimaryUse() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:4000/users/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: location.state.token,
      },
      body: JSON.stringify({
        primaryUse: e.target.value,
      }),
    })
      .then((res) => console.log(res))
      .then(() => {
        navigate(
          "../signup/verify-phone",
          {
            state: {
              email: location.state.email,
              firstName: location.state.firstName,
              lastName: location.state.lastName,
              token: location.state.token,
              primaryUse: e.target.value,
            },
          },
          { replace: true }
        );
      })
      .catch((error) => {});
  };

  return (
    <motion.div
      className="loginPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src={logo} className="loginLogo" />
      <h2 className="welcomeLogin">How will you primarily use ChemE.AI?</h2>
      <button
        type="button"
        value="building"
        className="signupUse"
        onClick={handleSubmit}
      >
        I'm a chemical engineering student
      </button>
      <button
        type="button"
        value="exploring"
        className="signupUse"
        onClick={handleSubmit}
      >
        I'm exploring personal use
      </button>
      <button
        type="button"
        value="research"
        className="signupUse"
        onClick={handleSubmit}
      >
        I'm studying another engineering
      </button>
      <button
        type="button"
        value="content"
        className="signupUse"
        onClick={handleSubmit}
      >
        I'm a chemical engineer in industry
      </button>
    </motion.div>
  );
}

export default PrimaryUse;
