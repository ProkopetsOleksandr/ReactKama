import React from "react";
import classes from './../Messages.module.css';

export default function Message(props) {
    return (
        <div className={classes.message}>{props.text}</div>
    );
}