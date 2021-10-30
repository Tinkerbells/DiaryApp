import React from 'react';
import classes from "./DiaryItem.module.css";
const DiaryItem = (props) => {
    return (
        <div className={classes.diary}>
            <div className={classes.diary__content}>
                <div className={classes.name}>{props.diary.name}</div>
                <div className={classes.body}>{props.diary.text}</div>
            </div>
        </div>
    );
};

export default DiaryItem;