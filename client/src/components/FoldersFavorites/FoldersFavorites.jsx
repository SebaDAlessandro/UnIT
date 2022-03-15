import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardFavorite from '../CardFavorite/CardFavorite'
import img from '../images/Carpeta.png'
import style from '../FoldersFavorites/FoldersFavorites.module.css'
import { getFavorites } from '../../redux/actions'
import FormCarpetas from '../FormCarpetas/FormCarpetas'
import NavRecluiter from '../NavRecluiter/NavRecluiter'
import Carpetas from '../Carpetas/Carpetas'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const FoldersFavorites = () => {

const [bandera, setBandera] = useState(0)
const [ cards, setCards ] = useState("finalSpace")

/* Estados de Redux */

const favorites = useSelector(state => state.favorites)
const usuario = useSelector(state => state.usuario)
const carpetas = useSelector(state => state.carpetas)

const dispatch = useDispatch()

useEffect(() => {
  if (bandera === 0){
    dispatch(getFavorites(usuario.id));
    setTimeout( () => {setBandera(1)}, 100)
  }
}, [favorites])

const handleOnDragEnd = (result) => {
  const items = Array.from(cards) 
  const [reorderItem] = items.splice(result.source.index, 1)
  items.splice(result.destination.index, 0, reorderItem)

  setCards(items)
}


  return (

    <DragDropContext dropD onDragEnd={handleOnDragEnd} >

      <div className={style.globalCont}>

      <Droppable direction='horizontal' droppableId='task'>  

        {(droppableProvider) => (
          <div 
          className={style.contCards}
          {...droppableProvider.droppableProps}
          ref={droppableProvider.innerRef}
          > 

              {bandera === 0 ? 
              <div className={style.folder}>
                <img src={img} />
              </div>  
              :
               favorites?.candidates?.map((c, index) => 

               <Draggable key={c.id} draggableId={c.id} index={index}>

                {(draggableProvider) => 

                <div
                {...draggableProvider.draggableProps}
                ref={draggableProvider.innerRef}
                {...draggableProvider.dragHandleProps}
                >
                <CardFavorite
                  key={index}
                  name={c.name}
                  lastname={c.lastname}
                  location={c.location}
                  id={c.id}
                  image={c.image}
                />
                </div>

                }

              </Draggable>
              )
              }

            {droppableProvider.placeholder} 

          </div>
        )}

      </Droppable>

          <div className={style.contCarpetas}> 
            <div>
              {!carpetas.length ? <FormCarpetas/> : <h1>Aun no tienes carpetas creadas</h1>}
            </div> 
              <div>
                <Carpetas/>
              </div> 
          </div>

            <div className={style.contNav}>
              <NavRecluiter/>
            </div>

      </div>

    </DragDropContext>            

  )
}

export default FoldersFavorites