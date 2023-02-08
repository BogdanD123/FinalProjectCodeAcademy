import { useState } from "react";
import Me from "../../assets/MeFacebook2.jpg";
import Languages from "../../languages/Languages.json";
import "./AboutMe.css";
import "../../index.css";

function AboutMe() {
  const [language, setLanguage] = useState(false);

  const toggleLanguage = () => {
    setLanguage(!language);
  };

  return (
    <section id="aboutme" className="aboutMeContentContainer contents">
      <div
        className="toggleLanguage"
        onClick={() => {
          toggleLanguage();
        }}
      >
        {!language ? "Change in Macedonian" : "Change in English"}
      </div>
      <h2 className="somethingAboutMeTitle">
        {language
          ? Languages.Macedonian.titleAboutMe
          : Languages.english.titleAboutMe}
      </h2>
      <div className="aboutMeContent">
        <div className="aboutMeText">
          {language
            ? Languages.Macedonian.SomethingAboutMe
            : Languages.english.SomethingAboutMe}
        </div>
        <img className="Me" src={Me} alt={"myPicture"} />
      </div>
    </section>
  );
}

export default AboutMe;
