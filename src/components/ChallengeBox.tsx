import React from "react";

import "../styles/components/ChallengeBox.module.css";

import levelup from "../assets/images/level-up.svg";
import body from "../assets/images/body.svg";
import eye from "../assets/images/eye.svg";

import { useChallenge } from "../contexts/ChallengeContexts";
import { useCountdown } from "../contexts/CountdownContexts";

interface Props {}

const ChallengeBox: React.FC<Props> = (props) => {
    const { activeChallenge, resetChallenge, completeChallenge } = useChallenge();
    const { resetCountdown } = useCountdown();

    const handleChallengeSecceeded = () => {
        completeChallenge();
        resetCountdown();
    };

    const handleChanllengeFailed = () => {
        resetChallenge();
        resetCountdown();
    };

    return (
        <div className="challenge-box-container">
            {activeChallenge ? (
                <div className="challenge-active">
                    <header> Ganhe {activeChallenge.amount} xp </header>
                    <main>
                        <img src={activeChallenge.type === "body" ? body : eye} alt="body" />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button type="button" onClick={handleChanllengeFailed} className="challenge-failed-button">
                            Falhei
                        </button>
                        <button type="button" onClick={handleChallengeSecceeded} className="challenge-succeeded-button">
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className="challenge-not-active">
                    <strong>Finalize um ciclo para receber um desafio</strong>

                    <p>
                        <img src={levelup} alt="level-up" />
                        Avance de level completando desafios.
                    </p>
                </div>
            )}
        </div>
    );
};

export default ChallengeBox;
