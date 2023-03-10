import React, { useState } from "react";
import "../../css/login.css";
import logo from "../../images/logoBlack.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function NoteOnCredits() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate(
      "../home",
      {
        state: {
          email: location.state.email,
          firstName: location.state.firstName,
          lastName: location.state.lastName,
          token: location.state.token,
          primaryUse: location.state.primaryUse,
          phone: location.state.phone,
        },
      },
      { replace: true }
    );
  };

  return (
    <motion.div
      className="loginPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src={logo} className="loginLogo" />
      <h2 className="welcomeLogin">A note on credits</h2>
      <p className="noteOnCreditsText">
        Because this phone number is associated with an existing account, you
        will not receive additional free trial credits. <br></br>
        <br></br>Please upgrade to a paid plan to start using the ChemE.AI
        technology suite. If you need further assistance, please contact us
        through our help center at help.cheme.ai.
      </p>
      <form action="POST" onSubmit={handleSubmit}>
        <input
          type="submit"
          className="submitLogin loginBtn"
          value="Continue"
        />
      </form>
    </motion.div>
  );
}

export default NoteOnCredits;
