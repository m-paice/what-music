import React from "react";

import { useChallenge, ChallengeProvider } from "../../contexts/ChallengeContexts";

export const Container = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const { getChallenges, challengesData } = useChallenge();

        return (
            <Component
                payload={{
                    data: {
                        challenges: challengesData,
                    },
                    actions: {
                        getChallenges,
                    },
                }}
            />
        );
    };

    return Container;
};
