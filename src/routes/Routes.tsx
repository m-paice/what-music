import React from "react";

import { Router } from "react-router";
import { Route, Switch, Redirect } from "react-router-dom";

import history from "../utils/history";

// Private Route
import PrivateLayoutRoute from "./LayoutRoute";

// pages
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Leadboard from "../pages/Leadboard";

interface Props {}

const Routes: React.FC<Props> = (props) => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateLayoutRoute exact path="/home" component={Home} />
                <PrivateLayoutRoute exact path="/leadboard" component={Leadboard} />
            </Switch>
        </Router>
    );
};

export default Routes;
