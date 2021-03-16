import React from "react";
import "./AboutProject.scss";
import { SubNavigation } from "./SubNavigation";
import { ProjectDescription } from "./ProjectDescription";
import { ProjectDetails } from "./ProjectDetails";

export const AboutProject = (props) => {
  const { links, desc, project, allTech, features, images } = props.data;
  const currentPageId = props.data.id;

  return (
    <section className="about-project">
      <div className="container" style={{ position: "relative" }}>
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

        <SubNavigation currentPage={currentPageId} />
      </div>
    </section>
  );
};

