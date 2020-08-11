import React, { useEffect, useState } from "react";

import axios from "axios";
import { useQuery } from "react-query";

interface User {
    id: string;
    login: string;
}

interface Response {
    data: User[];
}

import "./styles/GlobalStyles.css";

const App: React.FC = () => {
    const { isLoading, error, data } = useQuery<Response, any>("usersData", () =>
        axios.get("https://api.github.com/users"),
    );

    return (
        <>
            <h1> Welcome to react </h1>

            {data?.data.map((user) => (
                <div key={user.id}>
                    {" "}
                    <strong> {user.id}: </strong> {user.login}{" "}
                </div>
            ))}
        </>
    );
};

export default App;
