import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={classes.Navbar}>
            <Link className={classes.signup} to="/signup">Sign up</Link>
            <Link className={classes.logo} to="/">Diary</Link>
            <Link className={classes.login} to="/login">Login</Link>
        </div>
    );
};

export default Navbar;