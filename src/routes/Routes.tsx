import React from "react";

import { Router } from "react-router";
import { Route, Switch } from "react-router-dom";

import history from "../utils/history";

// Private Route
import PrivateLayoutRoute from "./LayoutRoute";

// pages
import Home from "../pages/Home";
import Leadboard from "../pages/Leadboard";

interface Props {}

const Routes: React.FC<Props> = (props) => {
    return (
        <Router history={history}>
            <Switch>
                <PrivateLayoutRoute exact path="/" component={Home} />
                <PrivateLayoutRoute exact path="/leadboard" component={Leadboard} />
            </Switch>
        </Router>
    );
};

export default Routes;
