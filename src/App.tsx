import React, { useEffect, useState } from "react";

import axios from "axios";

interface UserData {
    id: string;
    login: string;
}

import "./styles/GlobalStyles.css";

const App: React.FC = () => {
    const [data, setData] = useState<UserData[]>([]);

    useEffect(() => {
        const fecthData = async () => {
            const response = await axios.get("https://api.github.com/users");

            console.log(response);

            setData(response.data);
        };

        fecthData();
    }, []);

    return (
        <>
            <h1> Welcome to react </h1>

            {data.map((user) => {
                return (
                    <div key={user.id}>
                        {" "}
                        <strong> {user.id}: </strong> {user.login}{" "}
                    </div>
                );
            })}
        </>
    );
};

export default App;
