import React from 'react'
import style from '../Portfolio/Portfolio.module.css'

export const Hello = () => {
  return (
    <div id='hello' className={style.contHello}>
        <div className={style.titleHello}>
            <div>
                <h1>Hola soy Alvaro!</h1>
            </div>
            <div>
            <button className={style.download}>Descargar CV</button>
            <a href="#sobremi">
                <button className={style.aboutme}>Sobre mi</button>
            </a>
            </div>
        </div>
        <div className={style.picture}>
            <img src='https://www.eltiempo.com/files/image_640_428/uploads/2022/02/24/6217f4a5b4637.png' alt='Not Found' />
        </div>
    </div>
  )
}

export default Hello
