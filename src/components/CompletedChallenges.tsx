import React from "react";

import "../styles/components/CompletedChallenges.module.css";

import { useChallenges } from "../contexts/challenges";

interface Props {}

const CompletedChanllenges: React.FC<Props> = (props) => {
    const { challengesCompleted } = useChallenges();

    return (
        <div className="completed-challenges-container">
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
};

export default CompletedChanllenges;
