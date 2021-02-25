import React from "react";
import './App.css';
import {Navigation} from "./Components/Navigation/Navigation";
import {Home} from "./Components/Home/Home";
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Navigation />
        <Switch>
            <Route exact path="/"  render={() => <Home/>}/>
        </Switch>
    </div>
  );
}

export default App;
