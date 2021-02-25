import React, {useContext} from "react";
import { withRouter } from "react-router-dom";
import {ProjectsDataContext} from "../../index";


 const ProjectInfo = (props) => {
     const projectsData = useContext(ProjectsDataContext);
     const test = props.match.params.projectName;
    return (
        <>
            Project {projectsData[props.match.params.projectName].title}
        </>
    );
};


export const ProjectInfoContainer =  withRouter(ProjectInfo);