import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import { Container } from "./LoginContainer";

import "../../styles/pages/Login.module.css";

import logo from "../../assets/images/logo.png";

// components
import Button from "../../components/Button";
import Input from "../../components/Input";

interface Props {
    payload: {
        data: {};
        actions: {
            signIn: (data) => void;
        };
    };
}

const Login: React.FC<Props> = ({ payload }) => {
    const { actions } = payload;
    const { signIn } = actions;

    const history = useHistory();

    const handleChangeInput = (key: string, value: string) => {
        setValues((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    const submit = (event: React.FormEvent) => {
        event.preventDefault();

        signIn(values);
    };

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <section></section>
                <section>
                    <img src={logo} alt="logo" />

                    <p>Bem-vindo aventureiro</p>

                    <form onSubmit={submit}>
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
                            Entrar
                        </Button>

                        <a onClick={() => history.push("/register")}>Não tem login? Cadastrar agora</a>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Container(Login);
