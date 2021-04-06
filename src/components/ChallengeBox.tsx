import React from "react";

import "../styles/components/ChallengeBox.module.css";

import Button from '../components/Button'

import music from "../assets/images/music.svg";

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
            <div className="challenge-box-answer-validate">
                {/* <img src="https://media.giphy.com/media/XbxZ41fWLeRECPsGIJ/giphy.gif" alt="answer-ok"/> */}
                {/* <img src="https://media.giphy.com/media/ftqLysT45BJMagKFuk/giphy.gif" alt="answer-not-ok"/> */}

                <Button>
                    Próximo desafio
                </Button>
            </div>
            {/* <div className="challenge-active">
                <header> Ganhe 20 xp </header>
                <main>
                    <img src={music} alt="body" />
                    <strong>Complete a música</strong>
                    <p> O mundo cada vez mais perdido... </p>

                    <section>
                        <label htmlFor="radio1">
                            <input type="radio" name="answer" id="radio1" />&nbsp;e eu vou caminhando nesse sentido
                        </label>

                        <label htmlFor="radio2">
                            <input type="radio" name="answer" id="radio2" />&nbsp;e eu cada vez mais perdidão
                        </label>

                        <label htmlFor="radio3">
                            <input type="radio" name="answer" id="radio3" />&nbsp;e eu estou cada vez mais em Deus
                        </label>

                        <label htmlFor="radio4">
                            <input type="radio" name="answer" id="radio4" />&nbsp;e eu estou cada vez mais rápido
                        </label>
                    </section>
                </main>

                <footer>
                    <button type="button" onClick={handleChanllengeFailed} className="challenge-failed-button">
                        Pular
                    </button>
                    <button type="button" onClick={handleChallengeSecceeded} className="challenge-succeeded-button">
                        Responder
                    </button>
                </footer>
            </div> */}
        </div>
    );
};

export default ChallengeBox;
