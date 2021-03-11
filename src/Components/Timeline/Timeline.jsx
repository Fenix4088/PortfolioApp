import React from "react";
import "./Timeline.scss"
import {timelineData} from "../../assets/data/timelineData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Timeline = (props) => {
  return <section className="how-it-works" id="how-it-work">
    <div className="container">
      <div className="sub-container">
        <h2 className="how-it-works__title">
          <span className="title-line-middle">Education</span>
        </h2>
        <div className="how-it-works__timeline">

            {timelineData.map(item => {
                return <TimelineStage title={item.title} description={item.desc} iconData={item.icon}/>
            })}
          {/*<TimelineStage/>*/}
          {/*<TimelineStage/>*/}
          {/*<TimelineStage/>*/}
          {/*<TimelineStage/>*/}

          {/*<div className="how-it-works__timeline-stage">*/}
          {/*  <div className="timeline-stage-wrapper ">*/}
          {/*    <div className="how-it-works__timeline-title">*/}
          {/*      <span className="title-line">Layout analysis</span>*/}
          {/*    </div>*/}
          {/*    <div className="how-it-works__timeline-description">Assesment of the amount of work, complexity, nuances.*/}
          {/*      Q&A*/}
          {/*    </div>*/}
          {/*    <div className="how-it-works__timeline-timing">Time 2 - 4 hours</div>*/}
          {/*  </div>*/}
          {/*  <div className="how-it-works__timeline-img">*/}
          {/*    <img src="./img/how_it_works/icon-analise.png" alt="icon"/>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className="how-it-works__timeline-stage">*/}
          {/*  <div className="timeline-stage-wrapper ">*/}
          {/*    <div className="how-it-works__timeline-title">*/}
          {/*      <span className="title-line">Technical requirement</span>*/}
          {/*    </div>*/}
          {/*    <div className="how-it-works__timeline-description">Estimate technical requirements, budget, deadline.*/}
          {/*    </div>*/}
          {/*    <div className="how-it-works__timeline-timing">Time 2 - 4 hours</div>*/}
          {/*  </div>*/}
          {/*  <div className="how-it-works__timeline-img">*/}
          {/*    <img src="./img/how_it_works/icon-timeline.png" alt="icon"/>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className="how-it-works__timeline-stage">*/}
          {/*  <div className="timeline-stage-wrapper ">*/}
          {/*    <div className="how-it-works__timeline-title">*/}
          {/*      <span className="title-line">Your hand on pulse</span>*/}
          {/*    </div>*/}
          {/*    <div className="how-it-works__timeline-description">Client will have access of GitHub repository. Task*/}
          {/*      status avaliable online.*/}
          {/*    </div>*/}
          {/*    <div className="how-it-works__timeline-timing">Time 2 hours</div>*/}
          {/*  </div>*/}
          {/*  <div className="how-it-works__timeline-img">*/}
          {/*    <img src="./img/how_it_works/icon-24-hours.png" alt="icon"/>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className="how-it-works__timeline-stage">*/}
          {/*  <div className="timeline-stage-wrapper ">*/}
          {/*    <div className="how-it-works__timeline-title">*/}
          {/*      <span className="title-line">All stages step by step</span>*/}
          {/*    </div>*/}
          {/*    <div className="how-it-works__timeline-description">*/}
          {/*      Progressive approach and payment.*/}
          {/*    </div>*/}
          {/*    <div className="how-it-works__timeline-timing">Time 2 - 4 hours.</div>*/}
          {/*  </div>*/}
          {/*  <div className="how-it-works__timeline-img">*/}
          {/*    <img src="./img/how_it_works/icon-result.png" alt="icon"/>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className="how-it-works__timeline-stage">*/}
          {/*  <div className="timeline-stage-wrapper ">*/}
          {/*    <div className="how-it-works__timeline-title">*/}
          {/*      <span className="title-line">Final project review</span>*/}
          {/*    </div>*/}
          {/*    <div className="how-it-works__timeline-description">Project ready. Final review. Sending results.*/}
          {/*      Downloading files on hosting.*/}
          {/*    </div>*/}
          {/*    <div className="how-it-works__timeline-timing">Time 2 - 4 hours.</div>*/}
          {/*  </div>*/}
          {/*  <div className="how-it-works__timeline-img">*/}
          {/*    <img src="./img/how_it_works/icon-final.png" alt="icon"/>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>

      </div>
    </div>
  </section>;
};


export const TimelineStage = (props) => {
    return(
        <div className="how-it-works__timeline-stage">
          <div className="timeline-stage-wrapper ">
            <div className="how-it-works__timeline-title">
              <span className="title-line">{props.title}</span>
            </div>
            <div className="how-it-works__timeline-description">{props.description}
            </div>
            <div className="how-it-works__timeline-timing">Time 2 - 4 hours</div>
          </div>
          <div className="how-it-works__timeline-img">
              {props.iconData.icon && <FontAwesomeIcon icon={props.iconData.icon} size={"3x"} className={props.iconData.class}/>}
          </div>
        </div>
    )
}