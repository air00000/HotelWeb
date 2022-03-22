import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <div className={s.header}>
            <div> <NavLink to="/" className={s.item}>Отель Уют 3 звезды</NavLink> </div>
            <div> <NavLink to="/book" className={s.item}>Бронирование</NavLink> </div>
            <div> <NavLink to="/delivery" className={s.item}>Доставка</NavLink> </div>
            <div> <NavLink to="/about" className={s.item}>О нас</NavLink> </div>
        </div>
    )
}

export default Header;