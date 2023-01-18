import React from "react";
//////// SOCIAL MEDIA ICONS ////////
import { AiFillFacebook } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
////////////////////////////////////
import "./SocialMedia.css";
function SocialMedia() {
  return (
    <div className="socialMediaContainer" style={{ color: "wheat" }}>
      <div>
        <div className={"socialTitle"}>Social</div>
        <a
          rel={"noreferrer"}
          href="https://www.facebook.com/bogdann123"
          target="_blank"
          className="facebook pages"
        >
          <span>Contact me on</span>
          <AiFillFacebook className="icons" />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/bogdandimitrievski/"
          className="instagram pages"
          target={"_blank"}
          rel="noreferrer"
        >
          <span>Contact me on</span>
          <RiInstagramFill className="icons" />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/bogdan-dimitrievski-02a75b230/"
          rel="noreferrer"
          target={"_blank"}
          className="linkedin pages"
        >
          <span>Contact me on</span>
          <SiLinkedin className="icons" />
          <div className="underline"></div>
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
