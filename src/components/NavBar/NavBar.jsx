import React from 'react';
import classes from './NavBar.module.scss';
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <ul className={classes.menuBar}>
            <li ><NavLink
                to='/songs'
                className={({ isActive }) =>
                    isActive ? "active" : undefined}>
                Songs
            </NavLink>
            </li>
            <li><NavLink
                to='/favorites'
                className={({ isActive }) =>
                    isActive ? "active" : undefined}>
                Favorites
            </NavLink></li>
        </ul>
    );
}

export default NavBar;
