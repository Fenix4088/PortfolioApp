import React, { useContext, useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import { ProjectsDataContext } from "../../index";
import { ProjectHeader } from "./ProjectHeader/ProjectHeader";
import { AboutProject } from "./AboutProject/AboutProject";
import { ContactsData } from "./ContactsData/ContactsData";

const ProjectInfo = (props) => {
  const projectsData = useContext(ProjectsDataContext);
  const currentProjectName = props.match.params.projectName;
  const currentProject = projectsData.filter(
    (p) => p.id === currentProjectName
  )[0];

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { title, mainTech, ...aboutProjectData } = currentProject;
  return (
    <>
      <ProjectHeader title={title} mainTech={mainTech} />
      <AboutProject data={aboutProjectData} />
      <ContactsData />
    </>
  );
};

export const ProjectInfoContainer = withRouter(ProjectInfo);
