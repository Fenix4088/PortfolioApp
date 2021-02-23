import React from "react";
import n from "./Navigation.scss"

export const Navigation = () => {
    return (
        <div className="n.fixed-wrapper">
            <nav className="n.header__navigation">
                <div className="header__navigation-logo">
                        <span className="title-line">
                            <a href="./index.html">YP</a>
                        </span>

                </div>
                <div className="header__burger-wrap">
                    <label className="header__burger-label">
                        <input type="checkbox" className="header__burger-checkbox"/>
                            <span className="header__burger"></span>
                    </label>
                </div>

                <div className="header__navigation-block">
                    <ul className="header__navigation-list">
                        <li className="header__navigation-list-item">
                            <a href="#" className="active-page">Main</a>
                        </li>
                        <li className="header__navigation-list-item">
                            <a href="./pages/projects-page.html">Projects</a>
                        </li>
                        <li className="header__navigation-list-item">
                            <a href="./pages/contacts-page.html">Contacts</a>
                        </li>
                    </ul>


                    <div className="intouch-block intouch-block--mobile">
                        <a href="https://github.com/Fenix4088?tab=repositories" target="_blank">
                            <i className="fab fa-github fa-3x"></i>
                        </a>

                        <a href="#">
                            <i className="fab fa-telegram fa-3x"></i>
                        </a>

                        <a href="https://vk.com/id13266823" target="_blank">
                            <i className="fab fa-vk fa-vk--modify"></i>
                        </a>

                        <a href="https://www.facebook.com/profile.php?id=100013553615468" target="_blank">
                            <i className="fab fa-facebook fa-3x"></i>
                        </a>
                    </div>

                    <div className="header__navigation-language header__navigation-language--mobile">
                        <a href="./indexRU.html">
                            <img src="./img/header/ru.png" alt="Russian flag"/>
                        </a>
                        <a href="./index.html">
                            <img src="./img/header/uk.png" alt="England flag"/>
                        </a>
                    </div>

                    <div className="header__naviation-email mobile-email">
                        <a href="mailto:fenix4088@gmail.com">fenix4088@gmail.com</a>
                    </div>

                </div>


                <div className="header__navigation-language">
                    <a href="./indexRU.html">
                        <img src="./img/header/ru.png" alt="Russian flag"/>
                    </a>
                    <a href="./index.html">
                        <img src="./img/header/uk.png" alt="England flag"/>
                    </a>
                </div>

                <div className="header__navigation-icons">
                    <div className="header__navigation-icon linkedin-icon">
                        <a href="https://www.linkedin.com/in/yehor-pliasov-5776981a2/" target="_blank">
                            <i className="fab fa-linkedin-in fa-2x"></i>
                        </a>
                    </div>
                    <div className="header__navigation-icon git-icon">
                        <a href="https://github.com/Fenix4088?tab=repositories" target="_blank">
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                    </div>
                    <div className="header__navigation-icon facebook-icon">
                        <a href="https://www.facebook.com/profile.php?id=100013553615468&ref=bookmarks" target="_blank">
                            <i className="fab fa-facebook-f fa-2x"></i>
                        </a>
                    </div>
                </div>

            </nav>
        </div>
    )

}