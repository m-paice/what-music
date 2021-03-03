import React from "react";

import "../styles/components/Input.module.css";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = (props) => {
    return <input className="input-component" {...props} />;
};

export default Input;
