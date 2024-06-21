import React from "react";
import logo from "../../logo.svg";

import { NavLink } from "react-router-dom";
import classes from './Header.module.css';

export default function Header(props) {
    return (
        <header className={classes.header}>
            <img src={logo} alt="logo"></img>

            <div className={classes.loginBlock}>
                {props.isAuthenticated &&
                    <div>
                        {props.login}
                        <div>
                            <button onClick={props.onLogout}>Logout</button>
                        </div>
                    </div>}
                {!props.isAuthenticated && <NavLink to="/login">Login</NavLink>}

            </div>
        </header>
    );
}
