import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase/compat";
import 'firebase/auth'
import 'firebase/firestore'
import {AuthContext} from "./context";


const app = firebase.initializeApp({
    apiKey: "AIzaSyDDy3ZJx1IuxltDU4qk6hZYB-m0-e19V2c",
    authDomain: "diary-app-c5b9b.firebaseapp.com",
    projectId: "diary-app-c5b9b",
    storageBucket: "diary-app-c5b9b.appspot.com",
    messagingSenderId: "121606713009",
    appId: "1:121606713009:web:e959d6b8c8b5bfc77abc90",
    measurementId: "G-4W6MKKLJLE"
});


const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <AuthContext.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App/>
    </AuthContext.Provider>,
    document.getElementById('root')
)
;

