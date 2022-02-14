import React from 'react'
import './Header.module.css'

const Header = () => {
    return(
        <div className="header">
            <div className="item name">Отель Уют 3 звезды</div>
            <div className="item book">Бронирование</div>
            <div className="item delivery">Доставка</div>
            <div className="item about">О нас</div>
        </div>
    )
}

export default Header;