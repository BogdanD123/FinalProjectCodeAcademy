import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/setupContext";
import Introductions from "../Introductions/Introductions";
import AboutMe from "../AboutMe/AboutMe";
import Experience from "../Experience/Experience";
import GithubProjects from "../GithubProjects/GithubProjects";
import ContactMe from "../ContactMe/ContactMe";
import SwitchToggle from "react-switch";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { SiKnowledgebase } from "react-icons/si";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { GiSun } from "react-icons/gi";
import { IoMoonSharp } from "react-icons/io5";
import "./Layout.css";

function Layout() {
  const [activeTab, setActiveTab] = useState("");

  const { backgroundTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`App ${backgroundTheme ? "dark" : "light"}`}>
      <div className="navBarContainer">
        <div className="navTabsContainer">
          <a
            onClick={() => {
              setActiveTab("#");
            }}
            className={`navTabs ${activeTab === "#" ? "active" : ""}`}
            href="#introductions"
          >
            <FaHome />
            <span className="sectionName">Home</span>
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
            <CgProfile />
            <span className="sectionName">About me</span>
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
            <span className="sectionName">Experience</span>
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
            <span className="sectionName">Github</span>
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
            <span className="sectionName">Contact</span>
          </a>
        </div>
        <div className="switchBackgroundColorContainer">
          <SwitchToggle
            className="switch"
            onChange={toggleTheme}
            checked={backgroundTheme === true}
            checkedIcon={<GiSun className="sunIcon" />}
            uncheckedIcon={<IoMoonSharp className="moonIcon" />}
          />
          <div className="themeModeText">
            {backgroundTheme ? (
              <span className="modeText">Dark Mode</span>
            ) : (
              <span className="modeText">Light Mode</span>
            )}
          </div>
        </div>
      </div>
      <Introductions />
      <AboutMe />
      <Experience />
      <GithubProjects />
      <ContactMe />
    </div>
  );
}

export default Layout;
