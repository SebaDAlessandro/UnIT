import React,{useState} from "react";
import Habilidades from "./Habilidades";
import Hello from "./Hello";
import Style from './Portfolio.module.css'

export default function NavPortafolio(){
    const [seleccion, setSeleccion] = useState('home')

    
    const ruta = window.location.href

    console.log(ruta.includes('sobremi'))

    return(
        <div className={Style.center}>
            <div className={Style.navContainer}>
                <h3 className={Style.nombreNav}>Alvaro<span>.</span></h3>
                <div className={Style.linkContainer}>
                    <a className={ruta.includes('hello') ? Style.linkActivo : null} href="#hello">Home</a>
                    <a className={ruta.includes('sobremi')? Style.linkActivo : null} href="#sobremi">Sobre Mi</a>
                    <a className={ruta.includes('habilidades')? Style.linkActivo : null} href="#habilidades">Mis Habilidaddes</a>
                    <a className={ruta.includes('proyectos')? Style.linkActivo : null} href="#proyectos">Mis Proyectos</a>
                </div>
            </div>
        </div>
    )
}   