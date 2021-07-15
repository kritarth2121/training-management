import React from "react";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>

      
        <Switch>
          <Route exact path="/" component={Dashboard  }></Route>
          <Route exact path="/login" component={Login}></Route>

          <Route exact path="/signup" component={Signup}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
