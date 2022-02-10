import React from 'react';
import "../main.css"

const Main = () => {
    return (
        <div className="container">
            <div className="main-menu">
                <div className="main-menu__first-elemment element">
                    <a href="/first">First page</a>
                </div>
                <div className="main-menu__second-elemment element">
                    <a href="/second">Second page</a>
                </div>
                <div className="main-menu__third-elemment element">
                    <a href="/third">Third page</a>
                </div>
            </div>
        </div>
    )
};

export default Main;
