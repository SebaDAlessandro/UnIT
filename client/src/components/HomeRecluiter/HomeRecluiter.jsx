import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import CardFavorite from '../CardFavorite/CardFavorite'
import img from '../images/Carpeta.png'
import saludo from '../images/Saludo.png'
import carpetas from '../images/Carpetas.png'
import tablas from '../images/Tablas.png'
import explora from '../images/Explora.png'
import style from './HomeRecluiter.module.css'
import NavRecluiter from '../NavRecluiter/NavRecluiter'
import 'animate.css';
import { getFavorites, getFolders } from '../../redux/actions'

const HomeRecluiter = () => {

const [bandera, setBandera] = useState(0)
const favorites = useSelector(state => state.favorites)
const loading = useSelector(state => state.loading)
const usuario = useSelector(state => state.usuario)
const dispatch = useDispatch()

console.log(favorites)

const id = JSON.parse(localStorage.getItem('id')) 

useEffect(() => {
  if (bandera === 0){
    dispatch(getFavorites(usuario.id));
    console.log(id, "Este es el LocalStorage")
    setTimeout( () => {setBandera(1)}, 100)
  }
}, [favorites])




  return (
    <div className={style.globalCont}>
      <div className={style.slider}>
        <div className={style.profilepicture}>
          <img src={`${favorites.image}`} alt="Not Found"/>
        </div>
        <div className={style.text}>
          <h1>{favorites.name}</h1>
          <button>Editar perfil</button>
        </div>
      </div>
        <div className={style.bottominfo}> 
          <div className={style.saludo}>
            <h1>Bienvenido {favorites.name}</h1>
            <img src={saludo} height={100} alt='Not Found' />
          </div>
        </div>
          <div className={style.nav}> 
            <NavRecluiter/> 
          </div>
            <div className={style.contButtons}>
              <div className={style.carpetas}> 
              <Link to='/favorites'>
                <img src={carpetas} alt='Not Found' />
              </Link>
              </div>
                <div className={style.tablas}> 
                <Link to='/folders'>
                  <img src={tablas} alt='Not Found' />
                </Link>
                </div>
                  <div className={style.explora}>
                  <Link to='/home'>
                    <img src={explora} alt='Not Found' />
                  </Link>
                  </div>
            </div>
    </div>
  )
}

export default HomeRecluiter