import React, {useContext} from "react";
import "./AboutProject.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import {ProjectsDataContext} from "../../../index";

export const AboutProject = (props) => {

  const { links, desc, project, allTech, features, images } = props.data;
  const currentPageId = props.data.id;



  return (
    <section className="about-project">
      <div className="container">
        <div className="project-wrapper">
          <div className="about-project__info">
            <div className="about-project__links-wrap">
              <div className="about-project__wrapper--mobile">
                <ProjectDescription links={links} desc={desc} />

                <ProjectDetails
                  project={project}
                  links={links}
                  allTech={allTech}
                  features={features}
                />
              </div>
            </div>
          </div>
          <div className="about-project__img">
            <img src={images.big} alt="budget-calculator" />
          </div>
        </div>

        <SubNavigation currentPage={currentPageId}/>

        {/*<div className="about-project__buttons">*/}
        {/*  <NavLink*/}
        {/*    to="/projectPage/projectName"*/}
        {/*    className="about-project__button-previous"*/}
        {/*  >*/}
        {/*    Previous project*/}
        {/*  </NavLink>*/}
        {/*  <NavLink to="/projectPage/projectName" className="about-project__button-next">*/}
        {/*    Next project*/}
        {/*  </NavLink>*/}
        {/*</div>*/}
      </div>
    </section>
  );
};


export const SubNavigation = (props) => {
  const projectsData = useContext(ProjectsDataContext);
  const allPagesIds = Object.keys(projectsData).reverse();

  const getPagesDirection = (currentPage, allProjectsIds) => {
    return allProjectsIds.reduce((acc, currentElem, i, arr) => {
      if(currentElem === currentPage) {
        if(arr[i+1]) {
          acc.nextPage = arr[i+1];
        } else {
          acc.nextPage = arr[0]
        }

        if(arr[i-1]) {
          acc.prevPage = arr[i-1];
        } else {
          acc.prevPage = arr[arr.length - 1];
        }

      }
      return acc;
    }, {prevPage: "", nextPage: ""})

  }

  const {prevPage, nextPage} = getPagesDirection(props.currentPage, allPagesIds);

  return(
        <div className="about-project__buttons">
          <NavLink
              to={`/projectPage/${prevPage}`}
              className="about-project__button-previous"
          >
            Previous project
          </NavLink>
          <NavLink to={`/projectPage/${nextPage}`} className="about-project__button-next">
            Next project
          </NavLink>
        </div>
    )
}

export const ProjectDescription = (props) => {
  const { links, desc } = props;
  return (
    <div className="about-project__item--mobile">
      <div className="about-project__links-title">
        <span className="title-line-small">Links</span>
      </div>
      <div className="about-project__links">
        <ul className="about-project__lists">
          <li className="about-project__list">
            <span className="about-project__icon">
              <FontAwesomeIcon icon={faWindowMaximize} size={"2x"} />
            </span>
            <span className="about-project__link">
              <a href={`${links.demo}`} target="_blank">
                View demo online
              </a>
            </span>
          </li>
          <li className="about-project__list">
            <span className="about-project__icon">
              <FontAwesomeIcon icon={faGithub} size={"2x"} />
            </span>
            <span className="about-project__link">
              <a href={`${links.git}`} target="_blank">
                Code on a GitHub
              </a>
            </span>
          </li>
        </ul>
      </div>

      <div className="about-project__desc">
        <div className="about-project__desc-title">
          <span className="title-line-small">Description</span>
        </div>

        <div className="about-project__text">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export const ProjectDetails = (props) => {
  const { links, project, allTech, features } = props;
  return (
    <div className="about-project__item--mobile">
      <div className="about-project__details">
        <div className="about-project__details-title">
          <span className="title-line-small">Details</span>
        </div>

        <div className="about-project__details-desc">
          <ul className="about-project__details-list">
            <li className="about-project__details-item">
              <span className="about-project__details-name">Project:</span>
              <span className="about-project__details-data">{project}</span>
            </li>
            <li className="about-project__details-item">
              <span className="about-project__details-name">Link:</span>
              <span className="about-project__details-data about-project__details-data--link">
                <a href={`${links.demo}`} target="_blank">
                  {links.demo}
                </a>
              </span>
            </li>
            <li className="about-project__details-item">
              <span className="about-project__details-name">Technology:</span>
              <span className="about-project__details-data">
                {allTech.join(", ")}
              </span>
            </li>
            <li className="about-project__details-item">
              <span className="about-project__details-name">Features:</span>
              <span className="about-project__details-data">{features}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
