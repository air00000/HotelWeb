import React from 'react'
import s from "./Main.module.css"
import Photo from "./Photo/Photo";

const Main = () => {
    return(
        <div className={s.main}>
            <div className={s.about}>
                <div className={s.text}>Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития. Не следует, однако забывать, что сложившаяся структура организации влечет за собой процесс внедрения и модернизации систем массового участия.</div>
                <img className={s.img1} src="https://images.wallpaperscraft.ru/image/single/sova_vzgliad_ptitsa_249369_1024x600.jpg"/>
                </div>
            <Photo/>
        </div>
    )
}

export default Main;