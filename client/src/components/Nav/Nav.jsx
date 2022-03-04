import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import style from '../Nav/Nav.module.css'

const Nav = () => {

  const usuario = useSelector(state => state.usuario)

  return (
    <div className={style.container}>
      <div className={style.user}>
        <p>{usuario.name}</p>
        <span class="material-icons">
          account_circle
        </span>
      </div>
        <Link to='/'>
            <p>Home</p>
        </Link>
        <p>Mis favoritos</p>

    </div>
  )
}

export default Nav
