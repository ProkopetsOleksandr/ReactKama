import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}>
                    <NavLink to="/profile" className={({ isActive }) => isActive ? classes.active : ""}>Profile</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/messages" className={({ isActive }) => isActive ? classes.active : ""}>Messages</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/news" className={({ isActive }) => isActive ? classes.active : ""}>News</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/music" className={({ isActive }) => isActive ? classes.active : ""}>Music</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/users" className={({ isActive }) => isActive ? classes.active : ""}>Users</NavLink>
                </li>
            </ul>
        </nav>
    );
}
