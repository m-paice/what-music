import React from "react";

import "../styles/components/Profile.module.css";

import { useChallenge } from "../contexts/ChallengeContexts";

import levelIcon from "../assets/images/level.svg";

import superman from "../assets/images/superman.png";
import supergirl from "../assets/images/supergirl.png";
import batman from "../assets/images/batman.png";
import robo from "../assets/images/robo.png";
import flash from "../assets/images/flash.png";

interface Props {
    username: string;
    userLevel?: number;
}

const avatars = {
    1: superman,
    2: supergirl,
    3: batman,
    4: robo,
    5: flash,
};

const Profile: React.FC<Props> = (props) => {
    const { username } = props;

    const { level } = useChallenge();

    return (
        <div className="profile-container">
            <img src={avatars[Math.ceil(Math.random() * 5)]} alt="user-avatar" />

            <div>
                <strong>{username}</strong>
                <p>
                    <img src={levelIcon} alt="level" />
                    Level {props?.userLevel || level}
                </p>
            </div>
        </div>
    );
};

export default Profile;
