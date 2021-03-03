import React, { useState, useEffect } from "react";

import "../styles/components/Countdown.module.css";

import { useCountdown } from "../contexts/CountdownContexts";

interface Props {}

const Countdown: React.FC<Props> = (props) => {
    const { minutes, seconds, hasFinished, isActive, resetCountdown, startCountdown } = useCountdown();

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
    const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

    return (
        <div>
            <div className="countdown-contianer">
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button className="countdown-button" disabled>
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button
                            type="button"
                            className="countdown-button countdown-button-active"
                            onClick={resetCountdown}
                        >
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button type="button" className="countdown-button" onClick={startCountdown}>
                            Iniciar um ciclo
                        </button>
                    )}
                </>
            )}
        </div>
    );
};

export default Countdown;
