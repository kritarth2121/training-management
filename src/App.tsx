import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { Menu } from '@headlessui/react'

import Appcontext from "./Appcontext";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import { User } from "./models/User";
import ProfilePage from "./Pages/ProfilePage";
const Dashboard = lazy(() => import("./Pages/Dashboard"));
function App() {
  const token = localStorage.getItem("login_token");
  const [user, setUser] = useState<User>();

  return (
    <div className="inset-0">
      <Appcontext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
            </Route>
            <Route path={["/dashboard", "/login"]} exact>
              {token ? (
                <Suspense fallback={<div></div>}>
                  <Dashboard />{" "}
                </Suspense>
              ) : (
                <Login />
              )}
            </Route>
            <Route exact path="/profile" component={ProfilePage}></Route>
            <Route exact path="/signup" component={Signup}></Route>
          </Switch>
        </BrowserRouter>
      </Appcontext.Provider>
    </div>
  );
}

export default App;
