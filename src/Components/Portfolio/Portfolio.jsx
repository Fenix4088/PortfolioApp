import React, { useContext, useState } from "react";
import "./Portfolio.scss";
import { Project } from "../Project/Project";
import { ProjectsDataContext } from "../../index";

export const Portfolio = () => {
  const projectsData = useContext(ProjectsDataContext);
  let projectsDataKeys = Object.keys(projectsData);

  const [currentProjectsKeys, setCurrentProjectsKeys] = useState(
    projectsDataKeys
  );

  const onProjectMenuClick = (e) => {
    const { project } = e.currentTarget.dataset;
    let sortedData = { ...projectsData };

    if (project !== "all") {
      for (const [key, value] of Object.entries(sortedData)) {
        if (sortedData[key].label !== project) {
          delete sortedData[key];
        }
      }
      projectsDataKeys = Object.keys(sortedData);
    } else {
      projectsDataKeys = Object.keys(projectsData);
    }
    setCurrentProjectsKeys(projectsDataKeys);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="portfolio__title">
          <span className="title-line-middle">Portfolio</span>
        </h2>

        <div className="portfolio__toggles">
          <div
            data-project={"all"}
            className="portfolio__toggle portfolio__toggle--active filter"
            onClick={onProjectMenuClick}
          >
            All projects
          </div>
          <div
            data-project={"js"}
            className="portfolio__toggle filter"
            onClick={onProjectMenuClick}
          >
            Native JS
          </div>
          <div
            data-project={"react"}
            className="portfolio__toggle filter"
            onClick={onProjectMenuClick}
          >
            React.js
          </div>
          <div
            data-project={"markup"}
            className="portfolio__toggle filter"
            onClick={onProjectMenuClick}
          >
            HTML/CSS
          </div>
        </div>

        <div
          className="portfolio__projects-wrapper"
          id="portfolio-project-filter"
        >
          {currentProjectsKeys.reverse().map((p, i) => (
            <Project key={i} data={projectsData[p]} />
          ))}
        </div>

        <div className="portfolio__toggles-link">
          <a href="./pages/projects-page.html">View all projects</a>
        </div>
      </div>
    </section>
  );
};
