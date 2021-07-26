import React from "react";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { BrowserRouter, Switch, Route, Link,Redirect } from "react-router-dom";

function App() {
  const token=localStorage.getItem("login_token");
  return (
    <div className="inset-0">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" >
{token ? <Redirect to= "/dashboard"/>:<Redirect to= "/login"/> }

          </Route>
          <Route  path={["/dashboard","/login" ]} exact>

            {token ? <Dashboard/> : <Login/>}
          </Route>

          <Route exact path="/signup" component={Signup}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
