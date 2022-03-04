import React from 'react'
import Cards from '../Cards/Cards'
import Nav from '../Nav/Nav'
import { useSelector } from 'react-redux'
import style from '../Home/Home.module.css'

const Home = () => {

const usuario = useSelector(state => state.usuario)

  return (
    <div className={style.globalcontainer}>
        <Nav/>
        <div className={style.contSaludo}>
            <h1>Bienvenido {usuario.name}</h1> 
            <span className="material-icons">
                waving_hand
            </span>
        </div>
        <Cards/>
    </div>
  )
}

export default Home
