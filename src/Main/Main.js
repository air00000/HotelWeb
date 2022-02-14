import React from 'react'
import "./Main.module.css"
import Photo from "./Photo/Photo";

const Main = () => {
    return(
        <div className="main">
            <div className="about"></div>
            <img className="img1" src="https://images.wallpaperscraft.ru/image/single/sova_vzgliad_ptitsa_249369_1024x600.jpg"/>
            <Photo/>
        </div>
    )
}

export default Main;