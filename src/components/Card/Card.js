import React, { useState } from "react";
import { MINI_APPS } from "../../constants/LinkConstants";
import { STORE_APP } from "../../constants/LinkConstants";
import { SHOP_CART } from "../../constants/LinkConstants";
import {
  MINI_APPS_TEXT,
  SHOP_CART_TEXT,
  STORE_APP_TEXT,
} from "../../constants/TextConstants";
import "./Card.css";

function Card({ item }) {
  const [active, setActive] = useState(false);

  const [changeBoolean, setChangeBoolean] = useState(false);

  const { id, title, image } = item;

  const generateLink = (id) => {
    switch (id) {
      case 1:
        return MINI_APPS;
      case 2:
        return STORE_APP;
      case 3:
        return SHOP_CART;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="cardsContainer">
        <h3 className="projectTitle">{title}</h3>
        <div className="projectImageContainer">
          <img src={image} alt={"somePicture"} className="projectImage" />
        </div>
        <div className="buttonsContainer">
          <a
            className="buttons github"
            target={"_blank"}
            rel="noreferrer"
            href={(onclick = generateLink(id))}
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
      <div className={`showingText ${active ? "activated activing" : ""}`}>
        {changeBoolean
          ? id === 1
            ? MINI_APPS_TEXT
            : "" || id === 2
            ? SHOP_CART_TEXT
            : "" || id === 3
            ? STORE_APP_TEXT
            : ""
          : null}
      </div>
    </>
  );
}

export default Card;
