import React, { createContext, useContext } from "react";

import api from "../service/api";

import { useAuth } from "./AuthContext";

import history from "../utils/history";

interface User {
    name: string;
    email: string;
}

interface UserContextData {
    register: (data) => void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider: React.FC = ({ children }) => {
    const { signIn } = useAuth();

    const register = async (data) => {
        const response = await api.post("/user", data);

        if (response.data) return response.data;

        return false;
    };

    const handleRegister = async (data) => {
        const response = await register(data);

        if (response) await signIn({ username: response.username, password: response.password });
    };

    return (
        <UserContext.Provider
            value={{
                register: handleRegister,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);

    return context;
};
