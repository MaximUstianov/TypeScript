import React from "react";
import {NavLink} from 'react-router-dom'

export const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper purple darken-2 px1">
            <a href="/" className="Cars data table">Cars data table</a>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">Cars list</NavLink></li>
                <li><NavLink to="/about">Async request</NavLink></li>
            </ul>
        </div>
    </nav>
)