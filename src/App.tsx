import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import ProfilePage from "./Pages/ProfilePage";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./store";
import { me } from "./api/auth";
const Dashboard = lazy(() => import("./Pages/Dashboard"));
function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("login_token");
  const user = useSelector<AppState>((state) => state.me);
  console.log(user, token);
useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "sidebar", payload: false });
    },8000);
    if (!token) {
      return;
    }
    me().then((u) => dispatch({ type: "me/fetch", payload: u }));
  }, []);

  return (
    <div className="inset-0">
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
    </div>
  );
}

export default App;

