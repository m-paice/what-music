import React from "react";

import "../styles/components/Button.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = (props) => {
    const { children } = props;

    return (
        <button className="button-component" {...props}>
            {children}
        </button>
    );
};

export default Button;
