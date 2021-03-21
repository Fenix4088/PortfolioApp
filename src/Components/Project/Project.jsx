import React from "react";
import "./Project.scss";
import { NavLink } from "react-router-dom";

export const Project = (props) => {
  const { linkTitle, images, title, type, id, animation } = props.data;

  return (
    <div className={`portfolio__card ${animation}`}>
      <div className="portfolio__project-img">
        <img src={images.small} alt={title} />
        <NavLink to={`/projectPage/${id}`} className="portfolio__project-btn">
          View
        </NavLink>
      </div>
      <div className="portfolio__project-desk">
        <div className="portfolio__project-title-wrapper">
          <NavLink
            to={`/projectPage/${id}`}
            className="portfolio__project-title portfolio__project-title--small"
          >
            {linkTitle}
          </NavLink>
          <div className="portfolio__project-description portfolio__project-description--small">
            {type}
          </div>
        </div>
      </div>
    </div>
  );
};