import React from "react";
import {HeaderContent} from "./HeaderContent";
import line from "../../assets/img/backgrounds/lines.jpg";
import headerBg from "../../assets/img/backgrounds/header-bg.png"
import {MySkills} from "../MySkills/MySkills";

export const Header = () => {

    return (
    <header className="header" id="header" style={{backgroundImage: `url(${line})`}}>
        <HeaderContent/>
        <div className="header__image">
            <img src={headerBg} alt="Computer"/>
        </div>
        <MySkills id="aboutMe"/>
    </header>
  );
};