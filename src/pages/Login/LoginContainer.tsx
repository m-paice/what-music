import React from "react";

import { useAuth } from "../../contexts/AuthContext";

export const Container = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const { signIn } = useAuth();

        return (
            <Component
                payload={{
                    data: {},
                    actions: {
                        signIn,
                    },
                }}
            />
        );
    };

    return Container;
};
