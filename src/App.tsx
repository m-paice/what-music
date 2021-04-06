import React from "react";

import "./styles/GlobalStyles.css";

// routes
import Routes from "./routes";

// contexts
import { ChallengesProvider } from "./contexts/challenges";

interface Props {}

const App: React.FC<Props> = (props) => {
    return (
        <ChallengesProvider>
            <Routes />
        </ChallengesProvider>
    );
};

export default App;
