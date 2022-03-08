import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import style from '../Nav/Nav.module.css'
import logo from '../images/uni.png'
import ProfileHome from './Avatar'

const Nav = () => {

  const usuario = useSelector(state => state.usuario)

  return (
    <div className={style.container}>
      <img className={style.logo} src={logo} />
      <div className={style.user}>
        <p>{usuario.name}</p>
      </div>
      <div className={style.ps}>
        <Link to='/'>
            <p>Home</p>
        </Link>
        <p>Folders</p>
        <p>Favorites</p>
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
