import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import style from '../Nav/Nav.module.css'
import img from '../images/LogoNav.png'
const Nav = () => {

  const usuario = useSelector(state => state.usuario)

  return (
    <div className={style.container}>
      <div>
        <Link to='/'>
          <div className={style.logo}>
            <img src={img} alt='Not Found'/>
          </div>
        </Link>
      </div>
        <div className={style.text}>
            <Link to='/home'>
                <p>Home</p>
            </Link>
            <Link to='/favorites'>
                <p>Mis favoritos</p>
            </Link>
          <div className={style.user}>
            <p>{usuario.name}</p>
            <span class="material-icons">
              account_circle
            </span>
          </div>
      </div>

    </div>
  )
}

export default Nav
