import React from 'react';
import classes from "./Menu.module.css"
import MyButton from "../UI/Button/MyButton";
import {Link} from "react-router-dom";
import MyLink from "../UI/MyLink/MyLink";
const Menu = () => {
    return (
        <div className={classes.Menu}>
            <MyButton><MyLink to="/create">Create</MyLink></MyButton>
            <MyButton><MyLink to="/info">Information</MyLink></MyButton>
        </div>
    );
};

export default Menu;