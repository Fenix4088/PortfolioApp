import React from "react"
import "./MySkills.scss"
import {faFacebook, faGithub, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const MySkills = () => {
    return (
        <div>
            <div className="container">
                <section className="header__my-skils-wrapper" id="aboutMe">
                    <div className="header__my-skils">
                        <h3 className="header__my-skils-title">My skills:</h3>
                        <ul className="header__my-skils-lists">
                            <li className="header__my-skils-list">
                                pixel perfect, complete complines of design
                            </li>
                            <li className="header__my-skils-list">
                                responsive and adaptive web design
                            </li>
                            <li className="header__my-skils-list">
                                retina screens optimisation
                            </li>
                            <li className="header__my-skils-list">
                                with Bootstrap and with out it
                            </li>
                            <li className="header__my-skils-list">
                                using grids for making flexible pages
                            </li>
                        </ul>
                        <a href="./pages/projects-page.html" className="header__my-skils-btn">My projects</a>
                    </div>

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
                                <FontAwesomeIcon icon={faLinkedin} size={"3x"} className={"fa-linkedin-in"}/>
                            </a>

                            <a href="https://www.facebook.com/profile.php?id=100013553615468" target="_blank">
                                <FontAwesomeIcon icon={faFacebook} size={"3x"} className={"fa-facebook"}/>
                            </a>
                        </div>
                        <a href="mailto:fenix4088@gmail.com" className="header__intouch-email">
                            fenix4088@gmail.com
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}