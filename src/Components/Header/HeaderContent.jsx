import React from "react";
import "./Header.scss";
import avatar from "../../assets/img/header/avatar.jpg";
import { PortfolioBTN } from "../CommonComponents/PortfolioBTN/PortfolioBTN";

export const HeaderContent = (props) => {
  return (
    <div className={"container"}>
      <div className="header__content-wrapper">
        <div className="header__content-description">
          <h1 className="header__title">
            <span className="title-line-big">Yehor</span>
            <br />
            <span className="title-line-big"> Pliasov</span>
          </h1>
          <p>
            Front-end developer.
            <br />
            Quality, efficiency, compliance with deadlines and technical tasks.
          </p>
          <div className="header__btn-container">
            <PortfolioBTN
              path={"#aboutMe"}
              linkType={"hash"}
              theme={"color"}
              title={"About me"}
              additionalClass={"header__btn"}
            />
            <PortfolioBTN
              path={"#contacts"}
              linkType={"hash"}
              theme={"colorless"}
              title={"Contacts"}
              additionalClass={"header__btn"}
            />
          </div>
        </div>

        <div className="header__content-photo">
          <img src={avatar} alt="Yehor Pliasov" />
        </div>

        <div className="header__content-photo-back"></div>
      </div>
    </div>
  );
};
