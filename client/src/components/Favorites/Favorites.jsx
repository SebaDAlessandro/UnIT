import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardFavorite from '../CardFavorite/CardFavorite'
import img from '../images/Carpeta.png'
import style from '../Favorites/Favorites.module.css'
import Nav from '../Nav/Nav'

const Favorites = () => {

const favorites = useSelector(state => state.favorites)
const usuario = useSelector(state => state.usuario)


  return (
    <div className={style.globalCont}>
      <div className={style.contNav}>
        <Nav/>
      </div>
      <div className={style.contGrid}>
        <div className={style.contSaludo}>
            <h1>Bienvenido {usuario.name}</h1> 
            <span className="material-icons">
                waving_hand
            </span>
        </div>
        <div className={style.rectangle}>
          <div className={style.contCards}>
            {!favorites.length ?  
                
                favorites.candidates.map(c => <CardFavorite
                name={c.name}
                lastname={c.lastname}
                location={c.location}
                id={c.id}
                image={c.image}
              />
              )
              : 
              <div className={style.folder}>
                <img src={img} />
              </div>  
              }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Favorites
