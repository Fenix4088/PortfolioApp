import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const TimelineStage = React.memo((props) => {
  const { title, desc, dates, icon } = props.data;
  return (
    <div className="how-it-works__timeline-stage">
      <div className="timeline-stage-wrapper ">
        <div className="how-it-works__timeline-title">
          <span className="title-line">{title}</span>
        </div>
        <div className="how-it-works__timeline-description">{desc}</div>
        <div className="how-it-works__timeline-timing">{dates}</div>
      </div>
      <div className="how-it-works__timeline-img">
        {icon.icon && (
          <FontAwesomeIcon
            icon={icon.icon}
            size={"3x"}
            className={icon.class}
          />
        )}
      </div>
    </div>
  );
});