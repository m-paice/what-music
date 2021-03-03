import React, { createContext, useState, useEffect, useContext } from "react";

import api from "../service/api";

import history from "../utils/history";

export interface User {
    id: string;
    accountId: string;
    name: string;
    password: string;
    username: string;
    createdAt: Date;
    updatedAt: Date;
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    signIn(data): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storagedUser = localStorage.getItem("user");
        const storagedToken = localStorage.getItem("token");

        if (storagedUser && storagedToken) {
            api.defaults.headers["Authorization"] = `Bearer ${storagedToken}`;

            history.push("/home");

            setUser(JSON.parse(storagedUser));
        }
    }, []);

    const signIn = async (data) => {
        const response = await api.post("/user/auth", data);

        return response.data;
    };

    const handleSignIn = async (data) => {
        const response = await signIn(data);

        const { user, token } = response;

        setUser(user);

        api.defaults.headers["Authorization"] = `Bearer ${token}`;

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);

        history.push("/home");
    };

    const handleSignOut = () => {
        localStorage.clear();
        setUser(null);

        history.push("/login");
    };

    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                signIn: handleSignIn,
                signOut: handleSignOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
};
