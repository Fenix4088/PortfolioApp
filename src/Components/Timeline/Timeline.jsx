import React from "react";
import "./Timeline.scss";
import { timelineData } from "../../assets/data/timelineData";
import { TimelineStage } from "./TimelineStage";

export const Timeline = React.memo((props) => {
  return (
    <section className="how-it-works" id="how-it-work">
      <div className="container">
        <div className="sub-container">
          <h2 className="how-it-works__title">
            <span className="title-line-middle">Education</span>
          </h2>
          <div className="how-it-works__timeline">
            {timelineData.map((timelineStage, i) => {
              return <TimelineStage key={i} data={timelineStage} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
});

