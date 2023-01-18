import React, { useContext } from "react";
import { ThemeContext } from "../../context/setupContext";
import Navbar from "../Navbar/Navbar";
import Introductions from "../Introductions/Introductions";
import AboutMe from "../AboutMe/AboutMe";
import Experience from "../Experience/Experience";
import GithubProjects from "../GithubProjects/GithubProjects";
import ContactMe from "../ContactMe/ContactMe";
import SwitchToggle from "react-switch";
import "./Layout.css";
function Layout() {
  const { backgroundTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`App ${backgroundTheme === true ? "dark" : "light"}`}>
      <div className="switchButton">
        <SwitchToggle
          onChange={toggleTheme}
          checked={backgroundTheme === true}
        />
      </div>
      <Navbar />
      <Introductions />
      <AboutMe />
      <Experience />
      <GithubProjects />
      <ContactMe />
    </div>
  );
}

export default Layout;
