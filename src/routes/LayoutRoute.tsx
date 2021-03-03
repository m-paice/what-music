import React from "react";

import { Route, Redirect } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

import Layout from "../Layout/Layout";

interface PropsLayout {
    exact: boolean;
    path: string;

    component: React.ElementType;
}

const PrivateRoute: React.FC<PropsLayout> = ({ component: Component, ...rest }) => {
    const { signed } = useAuth();

    const token = signed;

    if (!token) {
        return <Redirect to="/login" />;
    }

    return (
        <Route
            {...rest}
            render={(matchProps) => (
                <Layout>
                    <Component {...matchProps} />
                </Layout>
            )}
        />
    );
};

export default PrivateRoute;
