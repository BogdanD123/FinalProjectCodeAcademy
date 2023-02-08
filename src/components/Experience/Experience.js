import React, { useState } from "react";
import Languages from "../../languages/Languages.json";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";
import { GrReactjs } from "react-icons/gr";
import { FaAward } from "react-icons/fa";
import PictureOfMe from "../../assets/MeFacebook1.jpg";
import "./Experience.css";
import "../../index.css";
function Experience() {
  const [language, setLanguage] = useState(false);

  const toggleLanguage = () => {
    setLanguage(!language);
  };

  const macedonianTitle = Languages.Macedonian.titleExperience;
  const macedonianLung = Languages.Macedonian.MyExperience;

  const englishTitle = Languages.english.titleExperience;
  const englishLung = Languages.english.MyExperience;

  return (
    <section id="experience" className="experienceContentContainer contents">
      <div className="imageContainer">
        <img src={PictureOfMe} alt={"myPicture"} className={"pictureOfMe"} />
      </div>
      <div className="experienceContainer">
        <div
          className="toggleLanguage"
          onClick={() => {
            toggleLanguage();
          }}
        >
          {!language ? "Change in Macedonian" : "Change in English"}
        </div>
        <h3 className="experienceTitle">
          {language ? macedonianTitle : englishTitle}
        </h3>
        <div className="experienceText">
          {language ? macedonianLung : englishLung}
        </div>
        <div className="lngExperienceTitle">Experience in:</div>
        <div className="languagesContainer">
          <div className="singleLanguage ">
            <article className="lngTitle">HTML</article>
            <div className="languageIconContainer">
              <SiHtml5 className="html__  lngIcon" />
            </div>
            <div className="awardIconContainer">
              <div className="htmlExpText expText">Good</div>
              <FaAward className="awardIcon" />
            </div>
          </div>
          <div className="singleLanguage ">
            <article className="lngTitle">CSS</article>
            <div className="languageIconContainer">
              <SiCss3 className="css__  lngIcon" />
            </div>
            <div className="awardIconContainer">
              <div className="cssExpText expText">Good</div>
              <FaAward className="awardIcon" />
            </div>
          </div>
          <div className="singleLanguage ">
            <article className="lngTitle">JAVASCRIPT</article>
            <div className="languageIconContainer">
              <DiJavascript className="javascript__ lngIcon" />
            </div>
            <div className="awardIconContainer">
              <div className="experiencedLevelTextJS expText">Good</div>
              <FaAward className="awardIcon" />
            </div>
          </div>
          <div className="singleLanguage ">
            <article className="lngTitle">BOOTSTRAP</article>
            <div className="languageIconContainer">
              <BsBootstrapFill className="bootstrap__ lngIcon" />
            </div>
            <div className="awardIconContainer">
              <div className="experiencedLevelTextBS expText">Basic</div>
              <FaAward className="awardIcon" />
            </div>
          </div>
          <div className="singleLanguage ">
            <article className="lngTitle">REACT</article>
            <div className="languageIconContainer">
              <GrReactjs className="react__  lngIcon" />
            </div>
            <div className="awardIconContainer">
              <div className="experiencedLevelTextREACT expText">Basic</div>
              <FaAward className="awardIcon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
