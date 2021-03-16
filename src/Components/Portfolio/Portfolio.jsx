import React, {useContext} from "react";
import "./Portfolio.scss"
import {Project} from "../Project/Project";
import {ProjectsDataContext} from "../../index";

export const Portfolio = () => {
    const projectsData = useContext(ProjectsDataContext);
    return (
        <section className="portfolio" id="portfolio">

            <div className="container">
                <h2 className="portfolio__title">
                    <span className="title-line-middle">Portfolio</span>
                </h2>

                <div className="portfolio__toggles">
                    <div className="portfolio__toggle portfolio__toggle--active filter">All projects
                    </div>
                    <div className="portfolio__toggle filter" >Native JS</div>
                    <div className="portfolio__toggle filter" >React.js</div>
                    <div className="portfolio__toggle filter" >HTML/CSS</div>
                </div>

                <div className="portfolio__projects-wrapper" id="portfolio-project-filter">
                    {Object.keys(projectsData).reverse().map((p, i) => <Project key={i} data={projectsData[p]}/>)}

                </div>

                <div className="portfolio__toggles-link">
                    <a href="./pages/projects-page.html">View all projects</a>
                </div>
            </div>

        </section>
    );
};