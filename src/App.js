import React, { useEffect, useState } from "react";
import "./App.css";
import { Navigation } from "./Components/Navigation/Navigation";
import { Home } from "./Components/Home/Home";
import { Switch, Route } from "react-router-dom";
import { ProjectInfoContainer } from "./Components/ProjectInfo/ProjectInfo";
import useResizeObserver from "use-resize-observer";
import {Footer} from "./Components/Footer/Footer";

function App() {
  const [menuStatus, setMenuStatus] = useState(false);
  const { ref, width = 1 } = useResizeObserver();

  useEffect(() => {
    if (width >= 991) setMenuStatus(false);
  }, [width]);

  return (
    <div ref={ref}>
      <Overlay menuStatus={menuStatus} />

      <Navigation menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/projectPage/:projectName"
          render={() => <ProjectInfoContainer />}
        />
      </Switch>
        <Footer/>
    </div>
  );
}

export const Overlay = ({ menuStatus }) => {
  return <div className={`${menuStatus ? "overlay" : ""}`}> </div>;
};

export default App;
