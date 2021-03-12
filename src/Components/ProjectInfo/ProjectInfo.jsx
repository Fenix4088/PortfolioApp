import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { ProjectsDataContext } from "../../index";
import { ProjectHeader } from "./ProjectHeader/ProjectHeader";
import { AboutProject } from "./AboutProject/AboutProject";
import { ContactsData } from "./ContactsData/ContactsData";

const ProjectInfo = (props) => {
  const projectsData = useContext(ProjectsDataContext);
  const currentProjectData = projectsData[props.match.params.projectName];

  const { title, mainTech, ...aboutProjectData } = currentProjectData;
  return (
    <>
      <ProjectHeader title={title} mainTech={mainTech} />
      <AboutProject data={aboutProjectData} />
      <ContactsData />
    </>
  );
};

export const ProjectInfoContainer = withRouter(ProjectInfo);
