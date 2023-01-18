import React, { useState } from "react";
import "./Card.css";
function Card({ item }) {
  const { id, title, image, text } = item;
  const [active, setActive] = useState(false);

  const [changeBoolean, setChangeBoolean] = useState(false);

  return (
    <>
      <div className="cardsContainer">
        <h3>{title}</h3>
        <img
          src={image}
          alt={"somePicture"}
          style={{ width: "300px", height: "300px" }}
        />
        <div className="buttonsContainer">
          <a
            className="buttons github"
            style={{
              backgroundColor: "transparent",
            }}
            target={"_blank"}
            rel="noreferrer"
            href={` ${
              id === 1
                ? "https://github.com/BogdanD123/ReactProjectApps"
                : "" || id === 2
                ? "https://github.com/BogdanD123/multi-page-app"
                : "" || id === 3
                ? "https://github.com/BogdanD123/shoppingCartProject"
                : ""
            } `}
          >
            Go Github
          </a>
          <div
            className="buttons about"
            onClick={() => {
              setChangeBoolean(!changeBoolean);
              setActive(!active);
            }}
          >
            More about...
          </div>
        </div>
      </div>
      <div className={`showingText ${active === true ? "activated" : ""}`}>
        {changeBoolean ? text : null}
      </div>
    </>
  );
}

export default Card;
