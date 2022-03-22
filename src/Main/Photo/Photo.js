import React from 'react'
import s from "./Photo.module.css"

const Photo = () => {
    return(
        <div className={s.photo}>
            <img className={s.img} src="https://images.wallpaperscraft.ru/image/single/rozy_butony_tsvety_249136_300x225.jpg"/>
            <img className={s.img} src="https://images.wallpaperscraft.ru/image/single/rozy_butony_tsvety_249136_300x225.jpg"/>
            <img className={s.img} src="https://images.wallpaperscraft.ru/image/single/rozy_butony_tsvety_249136_300x225.jpg"/>
        </div>
    )
}

export default Photo;