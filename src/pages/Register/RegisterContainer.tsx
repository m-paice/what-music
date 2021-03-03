import React from "react";

import { useUser } from "../../contexts/UserContext";

export const Container = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const { register } = useUser();

        return (
            <Component
                payload={{
                    data: {},
                    actions: {
                        register,
                    },
                }}
            />
        );
    };

    return Container;
};
