import React from "react";
import logo from "../../logo.svg";

import classes from './Header.module.css';
import { NavLink } from "react-router-dom";

export default function Header(props) {
    return (
        <header className={classes.header}>
            <img src={logo} alt="logo"></img>

            <div className={classes.loginBlock}>
                {props.isAuthenticated ? props.login : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    );
}
