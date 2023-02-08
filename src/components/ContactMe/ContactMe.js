import React from "react";
import { IoDocumentAttachOutline } from "react-icons/io5";
import SocialMedia from "../SocialMedia/SocialMedia";
import MyResume from "../../assets/Bogdan's Resume.pdf";
import "./ContactMe.css";
import "../../index.css";

function ContactMe() {
  return (
    <section
      id="contactme"
      className="conctactMeContainer"
      style={{ height: "100vh" }}
    >
      <form className="contactForm">
        <div className="emailText">
          Here's my E-mail Address, how you can contact me:
          <div className="email">bogdandimitrievski10@gmail.com</div>
        </div>
        <div className="resumeContainer">
          <a className="resume" href={MyResume} download>
            Download CV
            <IoDocumentAttachOutline className="cvIcon" />
          </a>
        </div>
        <SocialMedia />
      </form>
    </section>
  );
}

export default ContactMe;
