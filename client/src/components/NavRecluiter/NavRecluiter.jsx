import React from 'react'
import style from '../NavRecluiter/NavRecluiter.module.css'
import img from '../images/LogoNav.png'
import ProfileHome from '../Nav/Avatar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions';
import HomeRecluiter from '../HomeRecluiter/HomeRecluiter'

const NavRecluiter = () => {

  const dispatch = useDispatch()

  const folders = "/folders"
  const homer = "/homerecluiter"
  const favorites = "/favorites"
  const explore = "/home"
  const ajustes = "/ajustes"
  const ruta = window.location.pathname

  const usuario = useSelector(state => state.usuario)

  return (
  <div className={style.globalCont}>
    <div className={style.cont}>  

      <div className={style.picture}>
          <Link to='/homerecluiter'>
            <img src={usuario.image} height={65} />
          </Link> 
        </div>

        <div className={style.home}>
            <Link to='/homerecluiter'>
            <span className={`material-icons-round ${ruta === homer? style.rutas : style.default} `}>
              home
            </span>
                <span className={style.tooltip}>Home</span>
            </Link> 
        </div>

    {/*     <div className={style.home}>
            <Link to='/folders'>
            <span class={`material-icons-round ${ruta === folders? style.rutas : style.default} `}>
              favorite
            </span>
                <span className={style.tooltip}>Tablas</span>
            </Link> 
        </div> */}

        <div className={style.home}>
            <Link to='/home'>
                <span className={`material-icons-round ${ruta === explore? style.rutas : style.default} `}>
                  explore
                </span>
              <span className={style.tooltip}>Explora</span>
            </Link> 
        </div>

        <div className={style.home}>
            <Link to='/favorites'>
                <span className={`material-icons-round ${ruta === favorites? style.rutas : style.default} `}>
                  folder
                </span>
              <span className={style.tooltip}>Favoritos</span>
            </Link> 
        </div>

        <div className={style.home}>
            <Link to='/favorites'>
                <span className={`material-icons-round ${ruta === ajustes? style.rutas : style.default} `}>
                  settings
                </span>
              <span className={style.tooltip}>Ajustes</span>
            </Link> 
        </div>
        
      </div>

          <div className={style.contBottom}>

            <div className={style.home}>
                <Link to='/'>
                    <span onClick={() => (dispatch(logout()))} className={`material-icons-outlined ${ruta === favorites ? style.ruta : ''} `}>
                      logout
                    </span>
                  <span className={style.tooltip}>Salir</span>
                </Link> 
            </div>

          </div>  

    </div>
  )
}


export default NavRecluiter