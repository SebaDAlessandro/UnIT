import React, { useEffect } from 'react'
import Cards from '../Cards/Cards'
import Nav from '../Nav/Nav'
import { useSelector, useDispatch } from 'react-redux'
import { FILTRO_BUSCADOS, getFavorites } from '../../redux/actions'
import style from '../Home/Home.module.css'
import FiltroNav from '../Nav/FiltroNav'

const Home = () => {

const usuario = useSelector(state => state.usuario)

const dispatch = useDispatch();

const favorites = useSelector(state => state.favorites)
console.log(favorites, "Favoritos")
console.log(usuario.id)

useEffect(() => {
  console.log(usuario.id, "Prueba")
 /*  dispatch(getFavorites(usuario?.id)) */
}, [usuario])

  return (
    <div className={style.globalcontainer}>
        <Nav/>
        <FiltroNav/>
        <Cards/>        
    </div>
  )
}

export default Home