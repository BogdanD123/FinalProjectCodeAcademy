import React from "react";
import Me from "../../assets/MeFacebook2.jpg";
import "./AboutMe.css";
import "../../index.css";

function AboutMe() {
  return (
    <>
      <section id="aboutme" className="aboutMeContentContainer contents">
        <h2 className="somethingAboutMeTitle"> Something about me:</h2>
        <div className="aboutMeImage">
          <div className="aboutMeText">
            I start fresh with developing, i never planned before to learn about
            <span className="wordAccent">Developing</span>
            What does a Junior Front End Developer do? A junior front-end web
            developer is an entry-level employee that works with other
            developers to improve the appearance of a website. Some of the
            elements they must review thoroughly include text, imagery and the
            implementation of the design. Normally, they work in an office
            setting to modify the appearance of the website and present it to
            developers within their department. Source: © 2022
          </div>
          <img className="Me" src={Me} alt={"myPicture"} />
        </div>
      </section>
    </>
  );
}

export default AboutMe;
