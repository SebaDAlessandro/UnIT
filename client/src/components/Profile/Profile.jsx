import React, {useState} from "react";
import style from "./Profile.module.css";
import Skills from "./Skills";
import portada from "../images/portada.jpg";
import 'boxicons'
import Acordeon from "./Acordeon";
import Nav from "../NavRecluiter/NavRecluiter"
 
export default function Profile() {
  return (
    <div className={style.container}>
      <Nav/>
      <div className={style.contporta}>
        <img src={portada} className={style.img} />
      </div>
      <div className={style.container2}>
        <div className={style.conttitulo}>
          <h3 className={style.title}>Mi Perfil:</h3>
        </div>
        <div className={style.contenido}>
          <div className={style.cont1}>
            <div>
              <img className={style.imgperfil} src={portada}></img>
            </div>
            <div className={style.subtitulo}>
              <h1>Luis Lescano</h1>
              <h3>Junior UI/UX Design</h3>
            </div>

            <div className={style.contli}>
              <ul name="bx-ul">
                <li className={style.lista}>
                  <box-icon name="map"></box-icon> Figura, Malta
                </li>
                <li className={style.lista}>
                  <box-icon name="search-alt-2"></box-icon> Seeking:
                  No Data
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
        <div>
          <Skills />
        </div>
      </div>
    </div>
  );
}
