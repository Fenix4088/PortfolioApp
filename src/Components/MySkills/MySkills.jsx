import React from "react"
import "./MySkills.scss"

import {Intouch} from "../CommonComponents/IntouchBlock/Intouch";

export const MySkills = () => {
    return (
        <div>
            <div className="container">
                <section className="header__my-skils-wrapper" id="aboutMe" >
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

                    <Intouch size={"3x"} showTitle={true} showEmail={true}/>
                </section>
            </div>
        </div>
    );
}