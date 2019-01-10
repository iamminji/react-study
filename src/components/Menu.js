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
                <li><NavLink exact to="/" activeStyle={activeStyle}>메인</NavLink></li>
                <li><NavLink exact to="/response" activeStyle={activeStyle}>테스트</NavLink></li>
            </ul>
        </div>
    )
};

export default Menu;