import React from "react";

import "./styles/GlobalStyles.css";

// routes
import Routes from "./routes";

// contexts
import { AuthProvider } from "./contexts/AuthContext";
import { UserProvider } from "./contexts/UserContext";

interface Props {}

const App: React.FC<Props> = (props) => {
    return (
        <AuthProvider>
            <UserProvider>
                <Routes />
            </UserProvider>
        </AuthProvider>
    );
};

export default App;
