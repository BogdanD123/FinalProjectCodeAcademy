import React from "react";
import "./Introductions.css";
import "../../index.css";
function Introductions() {
  return (
    <>
      <section id="introductions" className="contentHomePageContainer">
        <div className="titleTagHello">Hello!</div>
        <img
          src={
            "https://scontent.fskp1-2.fna.fbcdn.net/v/t1.6435-9/189575034_4679935828689818_6683496217932519766_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=j4R9OHADTW0AX_2x8Ag&_nc_ht=scontent.fskp1-2.fna&oh=00_AfBSDiGL7_VAKR8yQ78VKi3ZuQTCPFHzQUhetUfwlOt26A&oe=63EE9469"
          }
          alt="somePicture"
          className="profilePicture"
        />
        <div className="titleTagIntroducing">My name is Bogdan</div>
        <div className="titleTagWhatAmI">
          I am a Junior Front-end Developer!
        </div>
      </section>
    </>
  );
}

export default Introductions;
