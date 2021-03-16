import React from "react";
import "./ContactsData.scss"
import {Intouch} from "../../CommonComponents/IntouchBlock/Intouch";
import mountains from "../../../assets/img/backgrounds/projects-page-bg.png"

export const ContactsData = () => {
  return (
    <section className="contacts-data">
      <div className="container">
        <div className="contacts-data__wrapper">
          <div className="contacts-data__title">
            If you whant to creat a WebSite:
          </div>
          <div className="contacts-data__link">
            send me a message&nbsp;
            <a href="mailto:fenix4088@gmail.com">fenix4088@gmail.com</a>
          </div>
          <Intouch size={"3x"} showTitle={false} showEmail={false}/>
        </div>
      </div>
      <div className="contacts-data__img">
        <img src={mountains} alt="Mountains" />
      </div>
    </section>
  );
};