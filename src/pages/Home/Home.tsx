import React from "react";

import "../../styles/pages/Home.module.css";

import ExperienceBar from "../../components/ExperienceBar";
import Profile from "../../components/Profile";
import CompletedChallenges from "../../components/CompletedChallenges";

import ChallengeBox from "../../components/ChallengeBox";

interface Props {}

const Home: React.FC<Props> = (props) => {
    return (
        <div className="container">
            <ExperienceBar />

            <section>
                <div>
                    <Profile username="Paice" />
                    <CompletedChallenges />
                </div>

                <ChallengeBox />
            </section>
        </div>
    );
};

export default Home;
