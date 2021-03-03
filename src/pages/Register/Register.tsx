import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import { Container } from "./RegisterContainer";

import "../../styles/pages/Register.module.css";

import Input from "../../components/Input";
import Button from "../../components/Button";

interface Props {
    payload: {
        data: {};
        actions: {
            register: (data) => void;
        };
    };
}

const Register: React.FC<Props> = ({ payload }) => {
    const { data, actions } = payload;
    const { register } = actions;

    const history = useHistory();

    const [values, setValues] = useState({
        name: "",
        company: "Ikatec",
        username: "",
        password: "",
    });

    const handleChangeInput = (key: string, value: string) => {
        setValues((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const submit = (event: React.FormEvent) => {
        event.preventDefault();

        register(values);
    };

    return (
        <div className="register-container">
            <section>
                <p>Informe seus dados aventureiro</p>

                <form onSubmit={submit}>
                    <Input
                        onChange={(event) => handleChangeInput("name", event.target.value)}
                        type="text"
                        placeholder="Digite seu nome"
                        required
                    />
                    <Input type="text" value="Ikatec" disabled />
                    <Input
                        onChange={(event) => handleChangeInput("username", event.target.value)}
                        type="text"
                        placeholder="Digite seu login"
                        required
                    />
                    <Input
                        onChange={(event) => handleChangeInput("password", event.target.value)}
                        type="password"
                        placeholder="Digite sua senha"
                        required
                    />

                    <Button type="submit" onClick={submit}>
                        Cadastrar
                    </Button>

                    <a onClick={() => history.push("/login")}>Voltar para login</a>
                </form>
            </section>
        </div>
    );
};

export default Container(Register);
