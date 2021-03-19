import React, {useContext, useEffect} from "react";
import { withRouter, useLocation } from "react-router-dom";
import { ProjectsDataContext } from "../../index";
import { ProjectHeader } from "./ProjectHeader/ProjectHeader";
import { AboutProject } from "./AboutProject/AboutProject";
import { ContactsData } from "./ContactsData/ContactsData";

const ProjectInfo = (props) => {
  const projectsData = useContext(ProjectsDataContext);

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

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
