import React from "react";

export const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper purple darken-2 px1">
            <a href="/" className="Cars data table">Cars data table</a>
            <ul className="right hide-on-med-and-down">
                <li><a href="/">Список</a></li>
                <li><a href="/">Информация</a></li>
            </ul>
        </div>
    </nav>
)