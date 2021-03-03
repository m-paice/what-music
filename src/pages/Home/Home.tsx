import React from "react";

import { useAuth } from "../../contexts/AuthContext";

import "../../styles/pages/Home.module.css";

import ExperienceBar from "../../components/ExperienceBar";
import Profile from "../../components/Profile";
import CompletedChallenges from "../../components/CompletedChallenges";
import Countdown from "../../components/Countdown";
import ChallengeBox from "../../components/ChallengeBox";

interface Props {}

const Home: React.FC<Props> = (props) => {
    const { user } = useAuth();

    return (
        <div className="container">
            <ExperienceBar />

            <section>
                <div>
                    <Profile username={user.name} />
                    <CompletedChallenges />
                    <Countdown />
                </div>
                <div>
                    <ChallengeBox />
                </div>
            </section>
        </div>
    );
};

export default Home;
