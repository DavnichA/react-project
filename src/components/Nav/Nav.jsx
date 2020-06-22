import React from 'react';
import nav from './Nav.module.css';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <div><NavLink to="/profile" activeClassName={nav.active}>Profile</NavLink></div>
            <div><NavLink to="/dialogs" activeClassName={nav.active}>Messages</NavLink></div>
            <div><NavLink to="/music" activeClassName={nav.active}>Music</NavLink></div>
            <div><NavLink to="/news" activeClassName={nav.active}>News</NavLink></div>
            <div><NavLink to="/users" activeClassName={nav.active}>Users</NavLink></div>
            <div><NavLink to="/settings" activeClassName={nav.active}>Settings</NavLink></div>
        </nav>
    );
}

export default Nav;