import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import {projectsData} from "./assets/data/projectsData";

export const ProjectsDataContext = React.createContext(projectsData);

ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
          <ProjectsDataContext.Provider value={projectsData}>
              <App />
          </ProjectsDataContext.Provider>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
