import React from "react";
import "./ProjectHeader.scss"

export const ProjectHeader = (props) => {
  const { title, mainTech } = props;
  return (
    <div className="project-info">
      <div className="container">
        <h2 className="project-info__title">
          <span className="title-line-middle">{title}</span>
        </h2>

        <div className="project-info__technology">
          {mainTech.map((t, i) => {
            return (
              <div
                  key={i}
                className={`project-info__technology-item project-info__technology-item--${t}`}
              >
                {t}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};