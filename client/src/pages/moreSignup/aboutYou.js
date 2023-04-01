import React, { useState } from "react";
import Header from "../../components/header";
import "../../css/login.css";
import logo from "../../images/logoBlack.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function AboutYou() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organization, setOrganization] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  function updateForm(e) {
    if (e.target.id === "firstName") {
      setFirstName(e.target.value);
    }
    if (e.target.id === "lastName") {
      setLastName(e.target.value);
    }
    if (e.target.id === "organization") {
      setOrganization(e.target.value);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("https://ehrboost.herokuapp.com/users/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: location.state.token,
      },
      body: JSON.stringify({
        firstName,
        lastName,
        organization,
      }),
    })
      .then((res) => console.log(res))
      .then(() => {
        navigate(
          "../signup/primary-use",
          {
            state: {
              email: location.state.email,
              firstName,
              lastName,
              token: location.state.token,
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
      <h2 className="welcomeLogin">Tell us about you</h2>
      <form action="POST" onSubmit={handleSubmit}>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => updateForm(e)}
          placeholder="First name"
          className="firstNameSignup"
        />
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => updateForm(e)}
          placeholder="Last name"
          className="lastNameSignup"
        />
        <input
          type="text"
          id="organization"
          value={organization}
          onChange={(e) => updateForm(e)}
          placeholder="Organization name (optional)"
          className="passwordLogin loginBtn"
        />
        <input
          type="submit"
          className="submitLogin loginBtn"
          value="Continue"
        />
      </form>
      <div className="loginToSignup">
        <p className="dontLogin">By clicking "Continue", you agree to our</p>
        <Link to="../terms-of-use" className="loginLinkToSignup">
          terms
        </Link>
      </div>
      <p className="confirmAge">and confirm you're 18 years or older.</p>
    </motion.div>
  );
}

export default AboutYou;

/*

.then((res) => {
  console.log(res.json());
})
.then(() => {
  fetch("http://127.0.0.1:4000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => {
      console.log(res.json());
      /*console.log(res.body.token);
    setToken(res.body.token);
    })
    .then(() => {
    navigate(
      "about-you",
      { state: { email, password, token } },
      { replace: true }
    );
  })
    .catch((error) => {});
})
.catch((error) => {});*/
