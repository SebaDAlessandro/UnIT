import React from 'react'
import style from '../NavRecluiter/NavRecluiter.module.css'
import img from '../images/LogoNav.png'
import ProfileHome from '../Nav/Avatar'
import { Link } from 'react-router-dom'

const NavRecluiter = () => {
  return (
    <div className={style.globlacont}>

        <div className={style.logo}>
        <Link to='/'>
            <img src={img} alt='Not Found' height={50}/>
        </Link>
        </div>
      
        <div className={style.icons2}>
            <ProfileHome/>
        </div>
       
    </div>
  )
}


export default NavRecluiter