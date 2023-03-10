import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../images/logoBlack.png";
import profile from "../images/profileIcon.png";
import "../css/chat.css";

//for now we'll chat on the home page
function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="chatPage">
      <div className="notesPanel">
        <div className="headerNotesPanel">
          <Link to="../">
            <img src={logo} className="logoNotesPanel" />
          </Link>
          <Link to="../">
            <img src={profile} className="profileNotesPanel" />
          </Link>
        </div>
        <div className="notesNotesPanel">
          <div className="aNote">
            <h1>Separations</h1>
            <ul>
              <li>Note 1</li>
              <li>Note 2</li>
            </ul>
          </div>
          <div className="aNote">
            <h1>Separations</h1>
            <ul>
              <li>Note 1</li>
              <li>Note 2</li>
            </ul>
          </div>
          <div className="aNote">
            <h1>Separations</h1>
            <ul>
              <li>Note 1</li>
              <li>Note 2</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="chatPanel">
        <div></div>
      </div>
    </div>
  );
}

export default Home;
