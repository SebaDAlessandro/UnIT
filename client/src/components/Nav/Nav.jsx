import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import style from './Nav.module.css'
import logo from '../images/LogoNav.png'
import ProfileHome from './Avatar'
import FiltroNav from './FiltroNav'

const Nav = () => {

  const usuario = useSelector(state => state.usuario)
  const folders = "/folders"
  const home = "/home"
  const favorites = "/favorites"
  const ruta = window.location.pathname

  return (
    <div className={style.container}>
      <Link to='/home'>
      <img className={style.logo} src={logo} />
      </Link>
      <div className={style.user}>
        <p>{usuario.name}</p>
      </div>
      <div className={style.ps}>
        <Link to='/'>
            <p className={`${style.pe} ${ruta === home ? style.prueba: null}`}>Home</p>
        </Link>
        <Link to='/folders'>
        <p className={`${style.pe} ${ruta === folders ? style.prueba: null}`}>Folders</p>
        </Link>
        <Link to='/favorites'>
        <p className={`${style.pe} ${ruta === favorites ? style.prueba: null}`}>Favorites</p>
        </Link>
      </div>
        <div className={style.icons}>
            <span className="material-icons">
              mail_outline
            </span>
            <span className="material-icons">
              notifications_none
            </span>
        </div>
        <div className={style.icons2}>
            <ProfileHome/>
            {/* <span className="material-icons">
              expand_more
            </span> */}
        </div>        
    </div>
  )
}

export default Nav