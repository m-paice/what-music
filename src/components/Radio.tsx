import React from "react";

import "../styles/components/Radio.module.css";

interface Props extends React.HTMLProps<HTMLInputElement> {
    htmlFor: string;
}

const Radio: React.FC<Props> = ({ htmlFor, type, name, id, onChange, value, checked, children }) => {
    return (
        <div className="col-12 pb-5">
            <input
                className="checkbox-tools"
                type={type}
                name={name}
                id={id}
                onChange={onChange}
                value={value}
                checked={checked}
            />
            <label className="for-checkbox-tools" htmlFor={htmlFor}>
                {children}
            </label>
        </div>
    );
};

export default Radio;
