import React from "react";

import "../styles/components/LevelUpModal.module.css";

import close from "../assets/images/close.svg";

import { useChallenge } from "../contexts/ChallengeContexts";

interface Props {}

const LevelUpModal: React.FC<Props> = (props) => {
    const { level, closeLevelUpModal } = useChallenge();

    return (
        <div className="level-up-modal-overlay">
            <div className="level-up-modal-container">
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src={close} alt="Fechar modal" />
                </button>
            </div>
        </div>
    );
};

export default LevelUpModal;
