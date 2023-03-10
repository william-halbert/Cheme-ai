import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/terms.css";

function TermsOfUse() {
  return (
    <div>
      <Header />
      <div className="termsWrapper">
        <div className="termsText">
          <h1 className="termsHeading">ChemE.AI Terms of Use</h1>
          <h2 className="termsParagraphs"></h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TermsOfUse;
