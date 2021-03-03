import React from "react";

import { useHistory, useLocation } from "react-router-dom";

import { ChallengeProvider } from "../contexts/ChallengeContexts";
import { CountdownProvider } from "../contexts/CountdownContexts";
import { useAuth } from "../contexts/AuthContext";

import "../styles/pages/Layout.module.css";

import logo from "../assets/images/logo.png";
import home from "../assets/images/home.svg";
import award from "../assets/images/award.svg";
import logout from "../assets/images/log-out.svg";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
    const history = useHistory();
    const { pathname } = useLocation();

    const { signOut } = useAuth();

    return (
        <ChallengeProvider>
            <CountdownProvider>
                <div className="layout-container">
                    <div className="layout-menu">
                        <div>
                            <img src={logo} alt="logo" onClick={() => history.push("/home")} />
                        </div>
                        <div>
                            <button
                                className={pathname === "/home" ? "active" : ""}
                                onClick={() => history.push("/home")}
                            >
                                <img src={home} alt="home" />
                            </button>
                            <button
                                className={pathname === "/leadboard" ? "active" : ""}
                                onClick={() => history.push("/leadboard")}
                            >
                                <img src={award} alt="home" />
                            </button>
                        </div>
                        <button className={pathname === "/login" ? "active" : ""} onClick={signOut}>
                            <img src={logout} alt="home" />
                        </button>
                    </div>
                    {children}
                </div>
            </CountdownProvider>
        </ChallengeProvider>
    );
};

export default Layout;
