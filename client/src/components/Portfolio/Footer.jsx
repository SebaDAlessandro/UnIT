import React from 'react'
import style from './Portfolio.module.css'

const Footer = () => {
  return (
    <div className={style.contFooter}>
        <h1>Alvaro Vega</h1>
            <div className={style.linkCont}>
                <a href="#hello">Home</a>
                <a href="#sobremi">Sobre Mi</a>
                <a href="#habilidades">Mis Habilidaddes</a>
                <a href="">Mis Proyectos</a>
            </div>
                <div className={style.contSocial}>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                </div>
    </div>
  )
}

export default Footer