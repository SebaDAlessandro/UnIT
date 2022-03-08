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
        <Cards/>
    </div>
  )
}

export default Home