import React from "react";
import "./Project.scss"

export const Project = (props) => {

    return (
        <div className="portfolio__card">
            <div className="portfolio__project-img">
                <img src="./img/projects-screenshots/unit-project-small.jpg" alt="Unit"/>
                <a href="./pages/unit-project.html" className="portfolio__project-btn">View</a>
            </div>
            <div className="portfolio__project-desk">
                <div className="portfolio__project-title-wrapper">
                    <a href="./pages/unit-project.html"
                       className="portfolio__project-title portfolio__project-title--small">Project
                        "Unit"</a>
                    <div
                        className="portfolio__project-description portfolio__project-description--small">Landing-page
                        project
                    </div>
                </div>
            </div>
        </div>
    );
};