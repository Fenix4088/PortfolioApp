import React, { useContext, useState } from "react";
import "./Portfolio.scss";
import { Project } from "../Project/Project";
import { ProjectsDataContext } from "../../index";

const menuItemList = [
  { title: "All projects", mark: "all" },
  { title: "Native JS", mark: "js" },
  { title: "React.js", mark: "react" },
  { title: "HTML/CSS", mark: "markup" },
];

export const Portfolio = () => {
  const projectsData = useContext(ProjectsDataContext);
  let projectsDataKeys = Object.keys(projectsData);

  const [currentProjectsKeys, setCurrentProjectsKeys] = useState(
    projectsDataKeys
  );
  const [isActive, setIsActive] = useState(0);

  const onProjectMenuClick = (e, index) => {
    setIsActive(index);
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
          {menuItemList.map((item, i) => {
            return (
              <MenuItem
                mark={item.mark}
                title={item.title}
                index={i}
                onProjectMenuClick={onProjectMenuClick}
                isActive={isActive}
              />
            );
          })}
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

export const MenuItem = (props) => {
  return (
    <div
      data-project={props.mark}
      className={`portfolio__toggle ${
        props.isActive === props.index ? "portfolio__toggle--active" : ""
      }`}
      onClick={(e) => props.onProjectMenuClick(e, props.index)}
    >
      {props.title}
    </div>
  );
};
