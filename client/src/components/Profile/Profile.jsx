import React, { useEffect, useState } from "react";
import style from "./Profile.module.css";
import Skills from "./Skills";
import portada from "../images/porta.png";
import img from '../images/LogoNav.png'
import 'boxicons'
import Acordeon from "./Acordeon";
import { useSelector, useDispatch  } from "react-redux"
import NavCandidato from "../NavCandidato/NavCandidato"
import Habilidades from "../Portfolio/Habilidades";
import { Link } from "react-router-dom";
import { getCandidate } from "../../redux/actions";

export default function Profile() {

  const [bandera, setBandera] = useState(0)

  /* Estados redux */

  const usuario = useSelector( state => state.usuario)
  const candidato = useSelector( state => state.candidato)
  console.log(candidato, 'Info cnadidato')

  const dispatch = useDispatch()

  useEffect(() => {
    if (bandera === 0){
      dispatch(getCandidate(usuario.id));
      setTimeout( () => {setBandera(1)}, 100)
    }
  })

  return (
    <div className={style.container}>
      <NavCandidato/>
      <div className={style.contporta}>
        <div className={style.circulo}>
          <img src={img} className={style.unit} />
        </div>
        <img src={portada} className={style.img} />
      </div>
      <div className={style.container2}>
        <div className={style.conttitulo}>
          <h3 className={style.title}>Mi Perfil</h3>
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
                  <Link to='/portfolio'>
                  <button className={style.btn}>Ver Portafolio</button>
                  </Link>
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
          <Habilidades/>
        </div>  
      </div>
    </div>
  );
}
