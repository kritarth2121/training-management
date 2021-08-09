import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import ProfilePage from "./Pages/ProfilePage";
import { useDispatch } from "react-redux";
import {  useAppSelector } from "./store";
import { me } from "./api/auth";
import { authAction } from "./actions/auth.actions";
import { meSelector } from "./selectors/auth.selectors";
import NotFound from "./Pages/Notfound";
import detailOFGroup from "./Pages/detailOFGroup";
import Groups from "./Pages/Groups";
const Dashboard = lazy(() => import("./Pages/Dashboard"));
function App() {
    const dispatch = useDispatch();
    const token = localStorage.getItem("login_token");
    const user = useAppSelector(meSelector);
    console.log(user, token,111);
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: "sidebar", payload: false });
        }, 8000);
        if (!token) {
            return;
        }
        me().then((u) => authAction.login(u));
    }, []);

    return (
        <div className="inset-0">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        {token ? (
                            <Redirect to="/dashboard" />
                        ) : (
                            <Redirect to="/login" />
                        )}
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
                    <Route
                        exact
                        path="/profile"
                        component={ProfilePage}
                    ></Route>
                    <Route
                        exact
                        path="/groups/:id"
                        component={detailOFGroup}
                    ></Route>
                    <Route exact path="/groups" component={Groups}></Route>

                    <Route exact path="/signup" component={Signup}></Route>
                    <Route>
          <NotFound />
        </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
