import React from 'react'
import './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <div> <NavLink to="/" className="item name">Отель Уют 3 звезды</NavLink> </div>
            <div> <NavLink to="/book" className="item book">Бронирование</NavLink> </div>
            <div> <NavLink to="/delivery" className="item delivery">Доставка</NavLink> </div>
            <div> <NavLink to="/about" className="item about">О нас</NavLink> </div>
        </div>
    )
}

export default Header;