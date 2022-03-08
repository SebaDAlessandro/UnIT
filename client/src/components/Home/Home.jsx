import React, { useEffect } from 'react'
import Cards from '../Cards/Cards'
import Nav from '../Nav/Nav'
import { useSelector, useDispatch } from 'react-redux'
import { getFavorite } from '../../redux/actions'
import style from '../Home/Home.module.css'

const Home = () => {

const usuario = useSelector(state => state.usuario)

const dispatch = useDispatch();

const favorites = useSelector(state => state.favorites)
console.log(favorites, "Favoritos")
console.log(usuario.id)

useEffect(() => {
  console.log(usuario.id, "Prueba")
  dispatch(getFavorite(usuario.id))
}, [usuario])

  return (
    <div className={style.globalcontainer}>
      <div className={style.contNav}>
        <Nav/>
      </div>
        <Cards/>
    </div>
  )
}

export default Home
