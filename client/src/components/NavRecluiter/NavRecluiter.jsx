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
  const ruta = window.location.pathname

  const usuario = useSelector(state => state.usuario)

  return (
  <div className={style.globalCont}>
    <div className={style.cont}>  

      <div className={style.picture}>
          <Link to='/homerecluiter'>
            <img src={usuario.image} height={70} />
          </Link> 
        </div>

        <div className={style.home}>
            <Link to='/homerecluiter'>
            <span className={`material-icons-round ${ruta === homer? style.rutas : null} `}>
              home
            </span>
                <span className={style.tooltip}>Home</span>
            </Link> 
        </div>

        <div className={style.home}>
            <Link to='/folders'>
            <span class="material-icons-outlined">
              favorite
            </span>
                <span className={style.tooltip}>Tablas</span>
            </Link> 
        </div>

        <div className={style.home}>
            <Link to='/home'>
                <span class="material-icons">
                  explore
                </span>
              <span className={style.tooltip}>Explora</span>
            </Link> 
        </div>

        <div className={style.home}>
            <Link to='/favorites'>
                <span className={`material-icons ${ruta === favorites? style.rutas : null} `}>
                  folder
                </span>
              <span className={style.tooltip}>Favoritos</span>
            </Link> 
        </div>
        
      </div>

          <div className={style.contBottom}>

            <div className={style.home}>
                <Link to='/'>
                  <span className={`${ruta === favorites ? style.ruta : ''}`}>
                    <span onClick={() => (dispatch(logout()))} className={`material-icons-outlined ${ruta === favorites ? style.ruta : ''} `}>
                      logout
                    </span>
                  </span>  
                  <span className={style.tooltip}>Salir</span>
                </Link> 
            </div>

          </div>  

    </div>
  )
}


export default NavRecluiter