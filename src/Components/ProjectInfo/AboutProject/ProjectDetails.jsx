import React from "react";

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
                <a href={`${links.demo}`} target="_blank" rel="noreferrer">
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