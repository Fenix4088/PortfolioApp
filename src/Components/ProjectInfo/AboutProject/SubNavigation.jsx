import React, { useContext } from "react";
import { ProjectsDataContext } from "../../../index";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";

export const SubNavigation = (props) => {
  const projectsData = useContext(ProjectsDataContext);
  // const allPagesIds = Object.keys(projectsData).reverse();

  const getPagesDirection = (currentPage, allProjects) => {
    return allProjects.reduce(
      (acc, currentElem, i, arr) => {
        if (currentElem.id === currentPage) {
          if (arr[i + 1]) {
            acc.nextPage = arr[i + 1].id;
          } else {
            acc.nextPage = arr[0].id;
          }

          if (arr[i - 1]) {
            acc.prevPage = arr[i - 1].id;
          } else {
            acc.prevPage = arr[arr.length - 1].id;
          }
        }
        return acc;
      },
      { prevPage: "", nextPage: "" }
    );
  };

  const { prevPage, nextPage } = getPagesDirection(
    props.currentPage,
      projectsData
  );

  return (
    <div className="about-project__buttons">
      <NavLink
        to={`/projectPage/${prevPage}`}
        className="about-project__button-previous"
      >
        <FontAwesomeIcon icon={faArrowAltCircleLeft} size={"3x"} />
      </NavLink>
      <NavLink
        to={`/projectPage/${nextPage}`}
        className="about-project__button-next"
      >
        <FontAwesomeIcon icon={faArrowAltCircleRight} size={"3x"} />
      </NavLink>
    </div>
  );
};