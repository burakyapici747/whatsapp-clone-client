import React, {Component, useEffect, useState, useRef} from 'react';
import {
    FormGroupStyled, LoginButtonStyled,
    LoginContainerStyled, LoginFormHeaderStyled,
    LoginFormStyled, LoginHeaderStyled, LoginHeaderTitleStyled,
    LoginInputStyled, LoginMainStyled
} from "../Assets/styles/Login/Login.styled";
import GlobalStyled from "../Assets/styles/Login/Global.styled";
import axios from 'axios';
import { useDispatch } from "react-redux";
import {setUser} from './../features/user/userSlice';
import { Navigate, useNavigate } from "react-router-dom";
import {ROUTE_PATHS} from "../config";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/user/login',
                {
                    email: email,
                    password: password,
                });
            const {data} = response.data;
            if(data !== null){
                dispatch(setUser({
                    isLogged: true,
                    id: data.id,
                    email: data.email,
                    password: data.password,
                }));
                navigate(ROUTE_PATHS.CHAT);
            }else{
                console.log("Hata var", data);
            }
        } catch (err) {
            //errMsg yi ayarla
            console.log("Hata var2 ", err);
        }
    };

    return (
        <>
            <GlobalStyled/>
            <LoginContainerStyled>
                <LoginFormStyled>
                    <LoginHeaderStyled>
                        <LoginHeaderTitleStyled>
                            Hoşgeldiniz!
                        </LoginHeaderTitleStyled>
                    </LoginHeaderStyled>
                    <LoginMainStyled>
                        <form onSubmit={handleSubmit}>
                            <FormGroupStyled>
                                <LoginInputStyled
                                    type="text"
                                    placeholder="Email giriniz"
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    autoComplete="off"
                                    value={email}
                                />
                            </FormGroupStyled>
                            <FormGroupStyled>
                                <LoginInputStyled
                                    type="password"
                                    placeholder="Şifre giriniz"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </FormGroupStyled>
                            <LoginButtonStyled>Giriş</LoginButtonStyled>
                        </form>
                    </LoginMainStyled>
                </LoginFormStyled>
            </LoginContainerStyled>
        </>
    );
};
export default Login;