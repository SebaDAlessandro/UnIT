import React, { useEffect, useState } from "react";
import style from "./DetailCandidato.module.css";
import Skills from "../Profile/Skills";
import portada from "../images/torre.png";
import img from '../images/LogoNav.png'
import 'boxicons'
import Acordeon from "../Profile/Acordeon";
import { useSelector, useDispatch  } from "react-redux"
import NavCandidato from "../NavCandidato/NavCandidato"
import Habilidades from "../Portfolio/Habilidades";
import { Link, useParams } from "react-router-dom";
import { getCandidate, logout } from "../../redux/actions";

const DetailCandidato = () => {

const [bandera, setBandera] = useState(0)

  /* Estados redux */

  const candidato = useSelector( state => state.candidato)
  const {id} = useParams();
  console.log(candidato, 'Info cnadidato')

  const dispatch = useDispatch()

  useEffect(() => {
    if (bandera === 0){
      dispatch(getCandidate(id));
      setTimeout( () => {setBandera(1)}, 100)
    }
  })

  return (
    <div className={style.container}>
    <div className={style.contporta}>
      <div className={style.circulo}>
        <img src={img} className={style.unit} />
      </div>
      <img src={portada} className={style.img} />
    </div>
    <div className={style.container2}>
      <div className={style.conttitulo}>
        <h3 className={style.title}>Mi Perfil</h3>
        <span onClick={() => (dispatch(logout()))} className={'material-icons-outlined'}>
                    logout
        </span>
      </div>
      <div className={style.contenido}>
        <div className={style.cont1}>
          <div>
            <img className={style.imgperfil} src={candidato.image} alt="algo"></img>
          </div>
          <div className={style.subtitulo}>
            <h1>{candidato.name} {candidato.lastname}</h1>
            <h3>Junior UI/UX Design</h3>
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
  )
}


export default DetailCandidato