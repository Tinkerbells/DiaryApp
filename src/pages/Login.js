import React, {useContext, useState} from 'react';
import MyButton from "../components/UI/Button/MyButton";
import {AuthContext} from "../context/index";
import firebase from "firebase/compat";

const Login = () => {
    const {auth} = useContext(AuthContext)
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }
    return (

        <div>
                <MyButton onClick={login}>Login</MyButton>

        </div>
    );
};

export default Login;