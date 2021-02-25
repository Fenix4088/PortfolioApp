import React from "react";
import './App.css';
import {Navigation} from "./Components/Navigation/Navigation";
import {Home} from "./Components/Home/Home";
import {Switch, Route} from "react-router-dom";
import {ProjectInfo, ProjectInfoContainer} from "./Components/ProjectInfo/ProjectInfo";

function App() {
  return (
    <div className="App">
        <Navigation />
        <Switch>
            <Route exact path="/"  render={() => <Home/>}/>
            <Route exact path="/projectPage/:projectName"  render={() => <ProjectInfoContainer/>}/>
        </Switch>
    </div>
  );
}

export default App;
