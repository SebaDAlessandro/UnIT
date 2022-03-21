import React, {useState} from "react";
import style from "./Profile.module.css";
import Skills from "./Skills";
import portada from "../images/porta.png";
import img from '../images/LogoNav.png'
import 'boxicons'
import Acordeon from "./Acordeon";
import {useSelector} from "react-redux"
import NavCandidato from "../NavCandidato/NavCandidato"

export default function Profile() {
  const usuario = useSelector((estate)=> estate.usuario)
  return (
    <div className={style.container}>
      <div className={style.nav}>
          <NavCandidato/>
      </div>
      <div className={style.contporta}>
        <div className={style.circulo}>
          <img src={img} className={style.unit} />
        </div>
        <img src={portada} className={style.img} />
      </div>
      <div className={style.container2}>
        <div className={style.conttitulo}>
          <h3 className={style.title}>Mi Perfil:</h3>
        </div>
        <div className={style.contenido}>
          <div className={style.cont1}>
            <div>
              <img className={style.imgperfil} src={usuario.image} alt="algo"></img>
            </div>
            <div className={style.subtitulo}>
              <h1>{usuario.name} {usuario.lastname}</h1>
              <h3>Junior UI/UX Design</h3>
            </div>

            <div className={style.contli}>
              <ul name="bx-ul">
                <li className={style.lista}>
                  <box-icon name="map"></box-icon> {usuario.location}
                </li>
                <li className={style.lista}>
                  <box-icon name="search-alt-2"></box-icon> Seeking:
                  {usuario.state}
                </li>
                <li className={style.lista}>
                  <box-icon name="cake"></box-icon> 2022-02-03
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li className={style.botonLista}>
                  <button className={style.btn}>Editar Perfil</button>
                </li>
                <li className={style.botonLista}>
                  <button className={style.btn}>Ver Portafolio</button>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.box}>
            <div className={style.cont2}>
            <Acordeon/>
            </div>
          </div>
        </div>
        {/* <div>
          <Skills />
        </div>  */}
      </div>
    </div>
  );
}
