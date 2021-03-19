import React, { useEffect, useState } from "react";
import "./Navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useResizeObserver from "use-resize-observer";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";


export const Navigation = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const toggleMenu = () => setMenuStatus(!menuStatus);
  const { ref, width = 1, height = 1 } = useResizeObserver();

  const navigationBlockStyle = {
    right: `${menuStatus || width > 991 ? "0px" : "-400px"}`,
  };

  useEffect(() => {
    const body = document.querySelector("body");

    const handler = (e) => {
      if (e.path && !e.path.some((el) => el.dataset?.elem === "navigation")) {
        setMenuStatus(false);
      }
    };
    if (menuStatus) {
      body && body.addEventListener("click", handler);
    }
    return () => {
      body && body.removeEventListener("click", handler);
    };


  });

  return (
    <div className="fixed-wrapper nav-fixed" ref={ref}>
      <nav className="header__navigation">
        <div className="header__navigation-logo">
          <span className="title-line">
            <a href="./index.html">YP</a>
          </span>
        </div>

        <div
          data-elem="navigation"
          className="header__navigation-block"
          style={navigationBlockStyle}
        >
          <ul className="header__navigation-list">
            <li className="header__navigation-list-item">
              <a href="#" className="active-page">
                Main
              </a>
            </li>
            <li className="header__navigation-list-item">
              <a href="./pages/projects-page.html">Projects</a>
            </li>
            <li className="header__navigation-list-item">
              <a href="./pages/contacts-page.html">Contacts</a>
            </li>
          </ul>

          {/*                <div className="intouch-block intouch-block--mobile">
                        <a href="https://github.com/Fenix4088?tab=repositories" target="_blank">
                            <FontAwesomeIcon icon={faGithub} size={"3x"} className={"fa-github"}/>
                        </a>

                        <a href="#">
                            <FontAwesomeIcon icon={faTelegram} size={"3x"} className={"fa-telegram"}/>
                        </a>

                        <a href="https://www.facebook.com/profile.php?id=100013553615468" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} size={"3x"} className={"fa-facebook"}/>
                        </a>

                        <a href="https://www.linkedin.com/in/yehor-pliasov-5776981a2/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} size={"3x"} className={"fa-linkedin-in"}/>
                        </a>
                    </div>*/}

          {/*<div className="header__navigation-language header__navigation-language--mobile">*/}
          {/*    <a href="./indexRU.html">*/}
          {/*        <img src={ruFlag} alt="Russian flag"/>*/}
          {/*    </a>*/}
          {/*    <a href="./index.html">*/}
          {/*        <img src={gbFlag} alt="England flag"/>*/}
          {/*    </a>*/}
          {/*</div>*/}

          <div className="header__naviation-email mobile-email">
            <a href="mailto:fenix4088@gmail.com">fenix4088@gmail.com</a>
          </div>
        </div>

        <div className="header__navigation-icons">
          <div className="header__navigation-icon linkedin-icon">
            <a
              href="https://www.linkedin.com/in/yehor-pliasov-5776981a2/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size={"2x"}
                className={"fa-linkedin-in"}
              />
            </a>
          </div>
          <div className="header__navigation-icon git-icon">
            <a
              href="https://github.com/Fenix4088?tab=repositories"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size={"2x"}
                className={"fa-linkedin-in"}
              />
            </a>
          </div>
          <div className="header__navigation-icon facebook-icon">
            <a
              href="https://www.facebook.com/profile.php?id=100013553615468&ref=bookmarks"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                size={"2x"}
                className={"fa-facebook-f"}
              />
            </a>
          </div>
        </div>

        <BurgerMenu menuStatus={menuStatus} toggleMenu={toggleMenu} />
      </nav>
    </div>
  );
};

export const BurgerMenu = (props) => {
  const burgerMenuFinalStyle =
    (props.menuStatus ? "burgerMenuOpen" : "burgerMenuClose") +
    " " +
    "burgerMenuCommon";

  const toggleMenuCallback = () => props.toggleMenu(!props.menuStatus);

  return (
    <div className="header__burger-wrap" onClick={toggleMenuCallback}>
      <span className={burgerMenuFinalStyle}></span>
    </div>
  );
};
