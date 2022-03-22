import React,{useState} from "react";
import Style from './Portfolio.module.css'

export default function NavPortafolio(){
    const [seleccion, setSeleccion] = useState('home')

    const sobremi = '/portfolio#sobremi'
    const ruta = window.location.pathname

    console.log(ruta)

    return(
        <div className={Style.center}>
            <div className={Style.navContainer}>
                <h3 className={Style.nombreNav}>Alvaro<span>.</span></h3>
                <div className={Style.linkContainer}>
                    <a href="#hello">Home</a>
                    <a href="#sobremi">Sobre Mi</a>
                    <a href="#habilidades">Mis Habilidades</a>
                    <a href="#proyectos">Mis Proyectos</a>
                </div>
            </div>
        </div>
    )
}   