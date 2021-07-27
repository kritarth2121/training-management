import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { BrowserRouter, Switch, Route, Link,Redirect } from "react-router-dom";
import { lazy, Suspense } from "react";
const  Dashboard =lazy(()=> import("./Pages/Dashboard"));
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

            {token ? <Suspense fallback="<div></div>"><Dashboard/> </Suspense> : <Login/>}
          </Route>

          <Route exact path="/signup" component={Signup}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
