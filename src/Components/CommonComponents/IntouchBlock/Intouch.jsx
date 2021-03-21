import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import "./Intouch.scss";

export const Intouch = (props) => {
  const { size, showTitle, showEmail } = props;
  return (
    <div className="header__intouch">
      {showTitle && <h3 className="header__intouch-title">Contacts:</h3>}
      <div className="header__intouch-links intouch-block">
        <a href="https://github.com/Fenix4088" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            size={size}
            className={"fa-github"}
          />
        </a>

        <a href="tg://resolve?domain=Yehor1991">
          <FontAwesomeIcon
            icon={faTelegram}
            size={size}
            className={"fa-telegram"}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/yehor-pliasov-5776981a2/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size={size}
            className={"fa-linkedin"}
          />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100013553615468"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            size={size}
            className={"fa-facebook"}
          />
        </a>
      </div>
      {showEmail && (
        <a href="mailto:fenix4088@gmail.com" className="header__intouch-email">
          fenix4088@gmail.com
        </a>
      )}
    </div>
  );
};
