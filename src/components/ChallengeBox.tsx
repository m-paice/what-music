import React, { useState } from "react";

import "../styles/components/ChallengeBox.module.css";

import music from "../assets/images/music.svg";

import Button from "../components/Button";

import { useChallenges } from "../contexts/challenges";

interface Props {}

const ChallengeBox: React.FC<Props> = (props) => {
    const { activeChallenge, validateAnswer, nextChallenge } = useChallenges();

    const [answerValue, setAnswerValue] = useState("");
    const [submitAnswer, setSubmitAnswer] = useState(false);
    const [answerValidated, setAnswerValidated] = useState(false);

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setAnswerValue(value);
    };

    const handleNextChallenge = () => {
        setSubmitAnswer(false);
        nextChallenge();
    };

    const handleChallengeSecceeded = () => {
        const response = validateAnswer(answerValue);

        setAnswerValidated(response);

        setSubmitAnswer(true);
        setAnswerValue("");
    };

    const handleChanllengeCalledOff = () => {
        nextChallenge();
        setAnswerValue("");
    };

    if (!activeChallenge) return <p> carregando... </p>;

    return (
        <div className="challenge-box-container">
            {submitAnswer ? (
                <div className="challenge-box-answer-validate">
                    {answerValidated ? (
                        <img src="https://media.giphy.com/media/XbxZ41fWLeRECPsGIJ/giphy.gif" alt="answer-ok" />
                    ) : (
                        <img src="https://media.giphy.com/media/ftqLysT45BJMagKFuk/giphy.gif" alt="answer-not-ok" />
                    )}

                    <Button type="button" onClick={handleNextChallenge}>
                        Próximo desafio
                    </Button>
                </div>
            ) : (
                <div className="challenge-active">
                    <header> Ganhe {activeChallenge.xp} xp </header>
                    <main>
                        <img src={music} alt="body" />
                        <strong>Complete a música</strong>
                        <p> {activeChallenge.question} </p>

                        <section>
                            {activeChallenge.answers.map((item, index) => (
                                <label key={index} htmlFor={`radio${index + 1}`}>
                                    <input
                                        type="radio"
                                        name="answer"
                                        id={`radio${index + 1}`}
                                        onChange={handleChangeInput}
                                        value={item.value}
                                        checked={item.value === answerValue}
                                    />
                                    &nbsp;{item.label}
                                </label>
                            ))}
                        </section>
                    </main>

                    <footer>
                        <button type="button" onClick={handleChanllengeCalledOff} className="challenge-failed-button">
                            Pular
                        </button>
                        <button type="button" onClick={handleChallengeSecceeded} className="challenge-succeeded-button">
                            Responder
                        </button>
                    </footer>
                </div>
            )}
        </div>
    );
};

export default ChallengeBox;
