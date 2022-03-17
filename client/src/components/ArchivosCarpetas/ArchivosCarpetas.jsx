import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFolderFavorites } from '../../redux/actions'
import { useParams } from 'react-router-dom';
import Carpetas from '../Carpetas/Carpetas';
import Nav from '../NavRecluiter/NavRecluiter'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import style from '../ArchivosCarpetas/ArchivosCarpetas.module.css'
import CardFavorite from '../CardFavorite/CardFavorite';
import FavCard from '../FavCart/FavCart'

const ArchivosCarpetas = () => {

    const [boton, setBoton] = useState('card')

    const dispatch = useDispatch();
    const {id} = useParams();
    const folderInfo = useSelector(state => state.archivos)
    console.log(folderInfo, "Información de la carpeta")

    useEffect(() => {
        dispatch(getFolderFavorites(id))
    }, [id])

  return (
    <div className={style.globalCont}>
        <div className={style.nav}>
            <Nav/>
        </div>
        <div className={style.nav}>
            <button onClick={() => {setBoton('tablas')}}>Tablas</button>
            <button onClick={() => {setBoton('card')}}>Card</button>
        </div>
        {boton === 'card'?
        <div className={style.archivos}>
          <div>
            <h1>{folderInfo.folderName}</h1>
          </div> 
             {folderInfo.candidates?.map((c, index) => <CardFavorite
             key={index}
             name={c[0].name}
             lastname={c[0].lastname}
             loation={c[0].location}
             id={c[0].id}
             image={c[0].image}
             />)} 
        </div> :
        <FavCard/>
        }
        <div className={style.contCarpetas}>
           {/*  <Carpetas/> */}
        </div>
    </div>
  )
}

export default ArchivosCarpetas
