import React from "react"
import "./MySkills.scss"

import {Intouch} from "../CommonComponents/IntouchBlock/Intouch";
import {PortfolioBTN} from "../CommonComponents/PortfolioBTN/PortfolioBTN";

export const MySkills = () => {
    return (
        <div>
            <div className="container">
                <section className="header__my-skils-wrapper" id="aboutMe" >
                    <div className="header__my-skils">
                        <h3 className="header__my-skils-title">My skills:</h3>
                        <ul className="header__my-skils-lists">
                            <li className="header__my-skils-list">
                                HTML, CSS(SCSS/LESS), RWD, AWD
                            </li>
                            <li className="header__my-skils-list">
                                JavaScript, TypeScript
                            </li>
                            <li className="header__my-skils-list">
                                React.js + Redux
                            </li>
                            <li className="header__my-skils-list">
                                Photoshop, Figma, Avocode
                            </li>
                            <li className="header__my-skils-list">
                                GIT
                            </li>
                            <li className="header__my-skils-list">
                                UNIT-test(JEST), Storybook, TDD
                            </li>
                            <li className="header__my-skils-list">
                                Material-UI, Ant Design, styled-components, module-css, Axios, REST API
                            </li>
                        </ul>
                        <PortfolioBTN
                            path={"#"}
                            linkType={"nav"}
                            theme={"color"}
                            title={"Download CV"}
                            additionalClass={"header__my-skils-btn"}
                        />
                    </div>

                    <Intouch size={"3x"} showTitle={true} showEmail={true}/>
                </section>
            </div>
        </div>
    );
}