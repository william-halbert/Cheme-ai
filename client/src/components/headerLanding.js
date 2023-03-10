import React, { useEffect, useState } from "react";
import logo from "../images/whiteLogo.png";
import "../css/header.css";
import { Link, useLocation } from "react-router-dom";

function HeaderLanding() {
  const [headerClassName, setHeader] = useState("header");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname == "/") {
      const handler = () => {
        let newClassName =
          window.pageYOffset > 20 ? "header headerHover" : "header";
        setHeader(newClassName);
      };
      window.addEventListener("scroll", handler);
      return () => window.removeEventListener("scroll", handler);
    }
  }, []);

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

export default HeaderLanding;
