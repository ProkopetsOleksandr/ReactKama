import React from "react";
import { NavLink } from 'react-router-dom';
import classes from './../Messages.module.css';

export default function DialogItem(props) {
    let path = '' + props.id;
    return (
        <div className={`${classes.dialog}`}>
            <NavLink to={path} className={({ isActive }) => isActive ? classes.active : ""}>{props.name}</NavLink>
        </div>
    );
}