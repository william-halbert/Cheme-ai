import React, { useEffect, useState } from "react";
import logo from "../images/whiteLogo.png";
import "../css/header.css";
import { Link } from "react-router-dom";

function Header() {
  const [headerClassName, setHeader] = useState("headerPurple");

  return (
    <div className={headerClassName}>
      <Link to="../">
        <img src={logo} className="headerLogo" />
      </Link>
      <Link to="features" className="features">
        Features
      </Link>
      <Link to="../login" className="signIn">
        Sign In
      </Link>
    </div>
  );
}

export default Header;
