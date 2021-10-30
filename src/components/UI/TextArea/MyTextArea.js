import React from 'react';
import classes from "./MyTextArea.module.css";
const MyTextArea = (props) => {
    return (

        <textarea className={classes.MyTextArea} {...props}  rows="5" cols="60" name="description"/>

    );
};

export default MyTextArea;