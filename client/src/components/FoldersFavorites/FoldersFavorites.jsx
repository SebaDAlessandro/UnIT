import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardFavorite from '../CardFavorite/CardFavorite'
import img from '../images/Carpeta.png'
import style from '../FoldersFavorites/FoldersFavorites.module.css'
import Nav from '../Nav/Nav'
import { getFavorites } from '../../redux/actions'

const FoldersFavorites = () => {

const [bandera, setBandera] = useState(0)
const favorites = useSelector(state => state.favorites)
const loading = useSelector(state => state.loading)
const usuario = useSelector(state => state.usuario)
console.log(favorites, "Estos son los favoritos")
const dispatch = useDispatch()
console.log(favorites)
useEffect(() => {
  if (bandera === 0){
    dispatch(getFavorites(usuario.id));
    setTimeout( () => {setBandera(1)}, 100)
  }
}, [favorites])


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
            {bandera === 0 ? 
              <div className={style.folder}>
                <img src={img} />
              </div>  
              :
               favorites?.candidates?.map(c => <CardFavorite
                name={c.name}
                lastname={c.lastname}
                location={c.location}
                id={c.id}
                image={c.image}
              />)
              }
            </div>
        </div>
      </div>
    </div>
  )
}

export default FoldersFavorites