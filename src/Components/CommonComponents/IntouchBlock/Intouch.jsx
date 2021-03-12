import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import "./Intouch.scss"

export const Intouch = () => {
    return(
        <div className="header__intouch">
            <h3 className="header__intouch-title">Contacts:</h3>
            <div className="header__intouch-links intouch-block">
                <a href="https://github.com/Fenix4088?tab=repositories" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size={"3x"} className={"fa-github"}/>
                </a>

                <a href="#">
                    <FontAwesomeIcon icon={faTelegram} size={"3x"} className={"fa-telegram"}/>
                </a>

                <a href="https://www.linkedin.com/in/yehor-pliasov-5776981a2/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size={"3x"} className={"fa-linkedin"}/>
                </a>

                <a href="https://www.facebook.com/profile.php?id=100013553615468" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} size={"3x"} className={"fa-facebook"}/>
                </a>
            </div>
            <a href="mailto:fenix4088@gmail.com" className="header__intouch-email">
                fenix4088@gmail.com
            </a>
        </div>
    )
}