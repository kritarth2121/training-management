import React from "react";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Alert from "./Alert";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Avatar from "./Avatar";
import Progress from "./Progress";
import Button from "./Button/Button";
import Avatararray from "./Avatararray";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Alert/>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/login" component={Login}></Route>

          <Route exact path="/signup" component={Signup}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
