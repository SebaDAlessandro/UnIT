import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFolderFavorites, getFolders } from '../../redux/actions'
import { useParams } from 'react-router-dom';
import Carpetas from '../Carpetas/Carpetas';
import Nav from '../NavRecluiter/NavRecluiter'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import style from '../ArchivosCarpetas/ArchivosCarpetas.module.css'
import CardFavorite from '../CardFavorite/CardFavorite';
import FavCard from '../FavCart/FavCart'
import CardFolder from '../CardFolder/CardFolder';

const ArchivosCarpetas = () => {
  

    const [boton, setBoton] = useState('card')
    const [bandera, setBandera] = useState(0)

    const dispatch = useDispatch();
    const {id} = useParams();
    const folderInfo = useSelector(state => state.archivos)
    const usuario = useSelector(state => state.usuario)
    const carpetas = useSelector(state => state.carpetas)
    console.log(folderInfo, "Información de la carpeta")

    useEffect(() => {
      if (bandera === 0){
        dispatch(getFolders(usuario.id));
        setTimeout( () => {setBandera(1)}, 100)
      }
      dispatch(getFolderFavorites(id))
    }, [id])

  return (
    <div className={style.globalCont}>
        <div className={style.nav}>
            <Nav/>
        </div>
        {boton === 'card'?
        <div className={style.archivos}>
          <div className={style.header}>
            <h1>{folderInfo.folderName}</h1>
              <div className={style.nav}>
                <button onClick={() => {setBoton('tablas')}}>Tablas</button>
                <button onClick={() => {setBoton('card')}}>Card</button>
              </div>
          </div> 

             {folderInfo.candidates?.map((c, index) => <CardFavorite
             key={index}
             name={c[0].name}
             lastname={c[0].lastname}
             loation={c[0].location}
             id={c[0].id}
             image={c[0].image}
             />)} 

        </div> 

        :

        <div className={style.tablas}>
            <div className={style.header}>
            <h1>{folderInfo.folderName}</h1>
              <div className={style.nav}>
                <button onClick={() => {setBoton('tablas')}}>Tablas</button>
                <button onClick={() => {setBoton('card')}}>Card</button>
              </div>
          </div> 
          <FavCard/>
        </div>

        }
        <div className={style.contCarpetas}>

          {carpetas.Folders?.map((n, index) => <CardFolder
          key={index}
          name={n.folderName}
          id={n.folderId}
          />
          )}

        </div>
    </div>
  )
}

export default ArchivosCarpetas
