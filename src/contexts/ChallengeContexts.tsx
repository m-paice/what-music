import React, { createContext, useState, useContext, useEffect } from "react";

import challenges from "../data/challenges.json";
import audio from "../assets/audio/notification.mp3";

import api from "../service/api";

import LevelUpModal from "../components/LevelUpModal";

import { User } from "./AuthContext";

export interface ChallengeData {
    id: string;
    userId: string;
    completed: number;
    current: number;
    total: number;
    level: number;
    user: User;
    updatedAt: Date;
    createdAt: Date;
}

interface Challenge {
    type: string;
    description: string;
    amount: number;
}

interface ChallengeContextData {
    level: number;
    currentExperience: number;
    experienceToNextLevel: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    challengesData: any[];
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
    closeLevelUpModal: () => void;
    getChallenges: () => void;
}

const ChallengeContext = createContext({} as ChallengeContextData);

export const ChallengeProvider: React.FC = ({ children }) => {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
    const [challengesData, setChallengesData] = useState<ChallengeData[]>([]);

    const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    useEffect(() => {
        Notification.requestPermission();

        const fetch = async () => {
            const { completed, current, level } = await (await api.get("/challenge/show")).data;

            setCurrentExperience(current);
            setLevel(level);
            setChallengesCompleted(completed);
        };

        fetch();
    }, []);

    const handleGetChallenges = async () => {
        const response = await api.get("/challenge", {
            params: {
                include: ["user"],
                order: [["total", "DESC"]],
            },
        });

        setChallengesData(response.data);
    };

    const levelUp = async () => {
        setLevel(level + 1);
        setIsLevelUpModalOpen(true);

        await api.post("/challenge", { level: level + 1 });
    };

    const closeLevelUpModal = () => {
        setIsLevelUpModalOpen(false);
    };

    const startNewChallenge = () => {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);

        new Audio(audio).play();

        if (Notification.permission === "granted") {
            new Notification("Novo desafio", {
                body: `Valendo ${challenge.amount}xp`,
            });
        }
    };

    const resetChallenge = () => {
        setActiveChallenge(null);
    };

    const completeChallenge = async () => {
        if (!activeChallenge) return;

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            await levelUp();
        }

        await api.post("/challenge", { completed: challengesCompleted + 1, current: finalExperience, total: amount });

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    };

    return (
        <ChallengeContext.Provider
            value={{
                level,
                currentExperience,
                experienceToNextLevel,
                challengesCompleted,
                activeChallenge,
                challengesData,
                levelUp,
                startNewChallenge,
                resetChallenge,
                completeChallenge,
                closeLevelUpModal,
                getChallenges: handleGetChallenges,
            }}
        >
            {children}

            {isLevelUpModalOpen && <LevelUpModal />}
        </ChallengeContext.Provider>
    );
};

export const useChallenge = () => {
    const context = useContext(ChallengeContext);

    return context;
};