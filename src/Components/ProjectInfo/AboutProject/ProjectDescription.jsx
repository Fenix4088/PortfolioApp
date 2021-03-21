import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";

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
              <a href={`${links.demo}`} target="_blank" rel="noreferrer">
                View demo online
              </a>
            </span>
          </li>
          <li className="about-project__list">
            <span className="about-project__icon">
              <FontAwesomeIcon icon={faGithub} size={"2x"} />
            </span>
            <span className="about-project__link">
              <a href={`${links.git}`} target="_blank" rel="noreferrer">
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