import React from "react";
import Header from "./components/header";
import Landing from "./pages/landing";
import Signup from "./pages/signin";
import LogIn from "./pages/login";
import TermsOfUse from "./pages/termsOfUse";
import PrivacyPolicy from "./pages/privacyPolicy";
import AboutYou from "./pages/moreSignup/aboutYou";
import NoteOnCredits from "./pages/moreSignup/noteOnCredits";
import PrimaryUse from "./pages/moreSignup/primaryUse";
import VerifyPhone from "./pages/moreSignup/verifyPhone";
import Home from "./pages/home";

import "./css/App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/about-you" element={<AboutYou />} />
        <Route path="/signup/note-on-credits" element={<NoteOnCredits />} />
        <Route path="/signup/primary-use" element={<PrimaryUse />} />
        <Route path="/signup/verify-phone" element={<VerifyPhone />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
