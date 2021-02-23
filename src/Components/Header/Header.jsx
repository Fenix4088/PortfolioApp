import React from "react";
import {HeaderContent} from "./HeaderContent";
import line from "../../assets/img/backgrounds/lines.jpg";
import headerBg from "../../assets/img/backgrounds/header-bg.png"

export const Header = () => {
  return (
    <header className="header" id="header" style={{backgroundImage: `url(${line})`}}>
      <div className={"container"}>
        <HeaderContent/>
      </div>
        <div className="header__image">
            <img src={headerBg} alt="Computer imag"/>
        </div>
    </header>
  );
};