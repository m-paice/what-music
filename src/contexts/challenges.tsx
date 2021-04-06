import React, { createContext, useState, useContext, useEffect } from "react";

import challenges from "../data/musics.json";

import LevelUpModal from "../components/LevelUpModal";

interface Answer {
    value: string;
    label: string;
}

interface Challenge {
    question: string;
    answers: Answer[];
    right: string;
    xp: number;
}

interface ChallengeContextData {
    activeChallenge: Challenge;
    currentExperience: number;
    experienceToNextLevel: number;
    challengesCompleted: number;
    level: number;
    validateAnswer(answer: string): boolean;
    closeLevelUpModal(): void;
    nextChallenge(): void;
}

const ChallengeContext = createContext({} as ChallengeContextData);

export const ChallengesProvider: React.FC = ({ children }) => {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null);

    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    useEffect(() => {
        startNewChallenge();
    }, []);

    const startNewChallenge = () => {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
    };

    const validateAnswer = (answer: string) => {
        if (answer === activeChallenge.right) {
            completeChallenge();

            return true;
        }

        return false;
    };

    const levelUp = () => {
        setLevel(level + 1);
        setIsLevelUpModalOpen(true);

        localStorage.setItem("level", (level + 1).toString());
    };

    const closeLevelUpModal = () => {
        setIsLevelUpModalOpen(false);
    };

    const nextChallenge = () => {
        startNewChallenge();
    };

    const completeChallenge = () => {
        if (!activeChallenge) return;

        const { xp } = activeChallenge;

        let finalExperience = currentExperience + xp;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        localStorage.setItem("completed", (challengesCompleted + 1).toString());
        localStorage.setItem("current", finalExperience.toString());
        localStorage.setItem("total", xp.toString());

        setCurrentExperience(finalExperience);
        setChallengesCompleted(challengesCompleted + 1);
    };

    return (
        <ChallengeContext.Provider
            value={{
                activeChallenge,
                currentExperience,
                experienceToNextLevel,
                challengesCompleted,
                level,
                validateAnswer,
                closeLevelUpModal,
                nextChallenge,
            }}
        >
            {children}

            {isLevelUpModalOpen && <LevelUpModal />}
        </ChallengeContext.Provider>
    );
};

export const useChallenges = () => {
    const context = useContext(ChallengeContext);

    return context;
};
