import React from "react";
import "./AboutProject.scss"

export const AboutProject = (props) => {
  console.log(props.data);
  const { links, desc, project, allTech, features, images} = props.data;
  return (
    <section className="about-project">
      <div className="container">
        <div className="project-wrapper">

          <div className="about-project__info">
            <div className="about-project__links-wrap">
              <div className="about-project__wrapper--mobile">
                <div className="about-project__item--mobile">
                  <div className="about-project__links-title">
                    <span className="title-line-small">Links</span>
                  </div>
                  <div className="about-project__links">
                    <ul className="about-project__lists">
                      <li className="about-project__list">
                        <span className="about-project__icon">
                          <i className="far fa-window-maximize fa-2x"></i>
                        </span>
                        <span className="about-project__link">
                          <a href={`${links.demo}`} target="_blank">
                            View demo online
                          </a>
                        </span>
                      </li>
                      <li className="about-project__list">
                        <span className="about-project__icon">
                          <i className="fab fa-github fa-2x"></i>
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

                <div className="about-project__item--mobile">
                  <div className="about-project__details">
                    <div className="about-project__details-title">
                      <span className="title-line-small">Details</span>
                    </div>

                    <div className="about-project__details-desc">
                      <ul className="about-project__details-list">
                        <li className="about-project__details-item">
                          <span className="about-project__details-name">
                            Project:
                          </span>
                          <span className="about-project__details-data">
                            {project}
                          </span>
                        </li>
                        <li className="about-project__details-item">
                          <span className="about-project__details-name">
                            Link:
                          </span>
                          <span className="about-project__details-data about-project__details-data--link">
                            <a href={`${links.demo}`} target="_blank">
                              {links.demo}
                            </a>
                          </span>
                        </li>
                        <li className="about-project__details-item">
                          <span className="about-project__details-name">
                            Technology:
                          </span>
                          <span className="about-project__details-data">
                            {allTech.join(", ")}
                          </span>
                        </li>
                        <li className="about-project__details-item">
                          <span className="about-project__details-name">
                            Features:
                          </span>
                          <span className="about-project__details-data">
                            {features}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-project__img">

            <img
              src={images.big}
              alt="budget-calculator"
            />
          </div>
        </div>

        <div className="about-project__buttons">
          <a
            href="./toDo-application.html"
            className="about-project__button-previous"
          >
            Previous project
          </a>
          <a href="./crm-system.html" className="about-project__button-next">
            Next project
          </a>
        </div>
      </div>
    </section>
  );
};