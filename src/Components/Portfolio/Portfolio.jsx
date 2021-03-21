import React, { useContext, useState } from "react";
import "./Portfolio.scss";
import { Project } from "../Project/Project";
import { ProjectsDataContext } from "../../index";
import { v1 } from "uuid";

const menuItemList = [
  { title: "All projects", mark: "all" },
  { title: "Native JS", mark: "js" },
  { title: "React.js", mark: "react" },
  { title: "HTML/CSS", mark: "markup" },
];

export const Portfolio = () => {
  const projectsData = useContext(ProjectsDataContext);

  const [currentProjects, setCurrentProjects] = useState(projectsData);

  const [isActive, setIsActive] = useState(0);
  const [isAnimate, setIsAnimate] = useState(false);

  const onProjectMenuClick = (e, index) => {
    setIsAnimate(true);

    setTimeout(() => {
      setIsAnimate(false);
    }, 1000);

    setIsActive(index);

    let filteredProjectData = [...projectsData];
    const { project } = e.currentTarget.dataset;

    if (project !== "all") {
      filteredProjectData = filteredProjectData.filter(
        (p) => p.label === project
      );
      setCurrentProjects(filteredProjectData);
    } else {
      setCurrentProjects(filteredProjectData);
    }
  };

  return (
    <section className="portfolio" id="projects">
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
          {currentProjects.map((p, i) => (
            <Project
              key={p.id}
              data={p}
              animation={isAnimate ? "portfolio__card--animation" : ""}
            />
          ))}
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
