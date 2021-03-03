import React, { useEffect } from "react";

import { Container } from "./LeadboardContainer";

import "../../styles/pages/Leardboard.module.css";

import { ChallengeData } from "../../contexts/ChallengeContexts";

import Profile from "../../components/Profile";

interface Props {
    payload: {
        data: {
            challenges: ChallengeData[];
        };
        actions: {
            getChallenges: () => void;
        };
    };
}

const Leadboard: React.FC<Props> = ({ payload }) => {
    const { data, actions } = payload;

    const { challenges } = data;
    const { getChallenges } = actions;

    useEffect(() => {
        getChallenges();
    }, []);

    return (
        <div className="leadboard-container">
            <p>Leadboard</p>

            <div className="table-row-title">
                <div>Posição</div>
                <div>Usuário</div>
                <div>Desafios</div>
                <div>Experiência</div>
            </div>

            {challenges.map((item, index) => (
                <div key={item.id} className="table-row-data">
                    <div>{index + 1}</div>

                    <Profile username={item.user.name} userLevel={item.level} />

                    <div>
                        <span>{item.completed}</span> completados
                    </div>
                    <div>
                        <span>{item.total}</span> xp
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Container(Leadboard);
