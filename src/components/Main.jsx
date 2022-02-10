import React from 'react';
import { NavLink } from 'react-router-dom';
import "../main.css"

const Main = () => {
    return (
        <div className="container">
            <div className="main-menu">
                <div className="main-menu__first-elemment element">
                    <NavLink to="/first">First page</NavLink>
                </div>
                <div className="main-menu__second-elemment element">
                    <NavLink to="/second">Second page</NavLink>
                </div>
                <div className="main-menu__third-elemment element">
                    <NavLink to="/third">Third page</NavLink>
                </div>
            </div>
        </div>
    )
};

export default Main;
