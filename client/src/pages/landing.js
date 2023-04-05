import React from "react";
import "../css/landing.css";
import hero from "../images/hero.jpg";
import arrow from "../images/rightArrow.png";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import HeaderLanding from "../components/headerLanding";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";
function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderLanding />
      <div className="heroWrapper">
        <div id="heroText">
          <motion.h1
            className="everythingText"
            initial={{ opacity: 0.5, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Everything you need to solve anything you want.
          </motion.h1>
          <motion.h1
            className="withKeyText"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            With key AI Tools, calibrations, and more, ChemE.AI is your
            next-generation problem solving suite.
          </motion.h1>
          <motion.div
            onClick={() => navigate("signup")}
            className="btn tryNow"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link to="signup" className="tryText">
              TRY CHEME.AI FOR FREE
            </Link>
            <FaArrowRight className="rightArrow" transform="grow-20" beat />
          </motion.div>
        </div>
        <img src={hero} id="heroImg" />
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
