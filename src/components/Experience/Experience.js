import React from "react";
import PictureOfMe from "../../assets/MeFacebook1.jpg";
import "./Experience.css";
import "../../index.css";
function Experience() {
  return (
    <section id="experience" className="experienceContentContainer contents">
      <img src={PictureOfMe} alt={"myPicture"} className={"pictureOfMe"} />
      <div className="experienceContainer">
        <h3 className="experienceTitle">My experience:</h3>
        <div className="experienceText">
          What does a Junior Front End Developer do? A junior front-end web
          developer is an entry-level employee that works with other developers
          to improve the appearance of a website. Some of the elements they must
          review thoroughly include text, imagery and the implementation of the
          design. Normally, they work in an office setting to modify the
          appearance of the website and present it to developers within their
          department. Source: What does a Junior Front End Developer do? A
          junior front-end web developer is an entry-level employee that works
          with other developers to improve the appearance of a website. Some of
        </div>
      </div>
    </section>
  );
}

export default Experience;
