import React, { useState } from "react";
//////// NAVIGATIONAL ICONS ////////
import { CgProfile } from "react-icons/cg";
import { SiProgress } from "react-icons/si";
import { SiKnowledgebase } from "react-icons/si";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
////////////////////////////////////
import "./Navbar.css";
import "../../index.css";

function Navbar() {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="navBarContainer">
      <div className="navTabsContainer">
        <a
          onClick={() => {
            setActiveTab("#");
          }}
          className={`navTabs ${activeTab === "#" ? "active" : ""}`}
          href="#introductions"
        >
          <CgProfile />
          <span>Intro</span>
        </a>
      </div>
      <div className="navTabsContainer">
        <a
          onClick={() => {
            setActiveTab("#aboutme");
          }}
          className={`navTabs ${activeTab === "#aboutme" ? "active" : ""}`}
          href="#aboutme"
        >
          <SiProgress />
          <span>About me</span>
        </a>
      </div>
      <div className="navTabsContainer">
        <a
          onClick={() => {
            setActiveTab("#experience");
          }}
          className={`navTabs ${activeTab === "#experience" ? "active" : ""}`}
          href="#experience"
        >
          <SiKnowledgebase />
          <span>Experience</span>
        </a>
      </div>
      <div className="navTabsContainer">
        <a
          onClick={() => {
            setActiveTab("#githubprojects");
          }}
          className={`navTabs ${
            activeTab === "#githubprojects" ? "active" : ""
          }`}
          href="#githubprojects"
        >
          <AiOutlineFundProjectionScreen />
          <span>Github</span>
        </a>
      </div>
      <div className="navTabsContainer">
        <a
          onClick={() => {
            setActiveTab("#contactme");
          }}
          className={`navTabs ${activeTab === "#contactme" ? "active" : ""}`}
          href="#contactme"
        >
          <IoMdContacts />
          <span>Contact</span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
