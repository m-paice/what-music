import React, { createContext, useContext, useState, useEffect } from "react";

import { useChallenge } from "./ChallengeContexts";

interface CountdownContextData {
    isActive: boolean;
    hasFinished: boolean;
    minutes: number;
    seconds: number;
    startCountdown: () => void;
    resetCountdown: () => void;
}

const CountdownContext = createContext({} as CountdownContextData);

let countdonwTimeout: NodeJS.Timeout;

export const CountdownProvider: React.FC = ({ children }) => {
    const { startNewChallenge } = useChallenge();

    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const startCountdown = () => {
        setIsActive(true);
    };

    const resetCountdown = () => {
        clearTimeout(countdonwTimeout);
        setIsActive(false);
        setHasFinished(false);
        setTime(0.05 * 60);
    };

    useEffect(() => {
        if (isActive && time > 0) {
            // @ts-ignore
            countdonwTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);

            startNewChallenge();
        }
    }, [isActive, time]);

    return (
        <CountdownContext.Provider
            value={{
                isActive,
                hasFinished,
                minutes,
                seconds,
                startCountdown,
                resetCountdown,
            }}
        >
            {children}
        </CountdownContext.Provider>
    );
};

export const useCountdown = () => {
    const context = useContext(CountdownContext);

    return context;
};
