import React from "react";
import "./Contacts.scss";
import contactBg from "../../assets/img/backgrounds/contacts-lines-grey-bg.jpg";
import dotsImg from "../../assets/img/contacts/dots.png";
import { Intouch } from "../CommonComponents/IntouchBlock/Intouch";
import { ContactUs } from "../CommonComponents/ContactUs/ContactUs";

export const Contacts = (props) => {
  return (
    <section
      className="contacts"
      style={{ backgroundImage: `url(${contactBg})` }}
      id={"contacts"}
    >
      <div className="container">
        <h2 className="contacts__title contacts__title">
          <span className="title-line-big">Contacts</span>
        </h2>
        <div className="contacts__wrapper">
          <div className="contacts__contact-details">
            <p>
              If you are looking for professional frontend developer for your
              team or your own project - let me know.
            </p>
            <div className="contacts__contact-wrapper">
              <ul className="contacts__contact-list">
                <li>
                  <span className="contacts__contact-type">Email</span>
                  <span className="contacts__contact-data">
                    <a href="mailto:fenix4088@gmail.com">fenix4088@gmail.com</a>
                  </span>
                </li>
                <li>
                  <span className="contacts__contact-type">Skype</span>
                  <span className="contacts__contact-data">
                    <a href="skype:egor1991_zp?add">egor1991_zp</a>
                  </span>
                </li>
                <li>
                  <span className="contacts__contact-type">Phone</span>
                  <span className="contacts__contact-data">
                    <a href="tel:+480729233897" className="phone">
                      +4 (80) 729-233-897
                    </a>
                  </span>
                </li>
                <li>
                  <span className="contacts__contact-type">Address</span>
                  <span className="contacts__contact-data">
                    Poland, Wroclaw
                  </span>
                </li>
              </ul>
            </div>
            <Intouch size={"3x"}/>
            <img
              src={dotsImg}
              alt="Dots"
              className="contacts__contact-details-img"
            />
          </div>

          <ContactUs/>

        </div>
      </div>

    </section>
  );
};
