import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer">
        <p className="willfulFooter">2023 Willful Works, L.L.C.</p>
        <Link to="terms-of-use" className="termsFooter">
          Terms of Use
        </Link>
        <Link to="privacy-policy" className="privacyFooter">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}

export default Footer;
