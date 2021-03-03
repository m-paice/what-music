import React from "react";

import "../styles/components/CompletedChallenges.module.css";

import { useChallenge } from "../contexts/ChallengeContexts";

interface Props {}

const CompletedChanllenges: React.FC<Props> = (props) => {
    const { challengesCompleted } = useChallenge();

    return (
        <div className="completed-challenges-container">
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
};

export default CompletedChanllenges;
