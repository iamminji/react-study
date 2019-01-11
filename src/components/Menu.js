import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    const activeStyle = {
        color:'green',
        fontSize: '2rem'
    };
    
    return (
        <div>
            <ul>
                <li><NavLink exact to="/weather" activeStyle={activeStyle}>A</NavLink></li>
                <li><NavLink exact to="/dust" activeStyle={activeStyle}>B</NavLink></li>
            </ul>
        </div>
    )
};

export default Menu;