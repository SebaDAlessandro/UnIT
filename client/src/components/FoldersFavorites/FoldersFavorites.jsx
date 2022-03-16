import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardFavorite from '../CardFavorite/CardFavorite'
import img from '../images/Carpeta.png'
import style from '../FoldersFavorites/FoldersFavorites.module.css'
import { getFavorites, addCandidateToFolder } from '../../redux/actions'
import FormCarpetas from '../FormCarpetas/FormCarpetas'
import NavRecluiter from '../NavRecluiter/NavRecluiter'
import Carpetas from '../Carpetas/Carpetas'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const FoldersFavorites = () => {

const [bandera, setBandera] = useState(0)
const [ cards, setCards ] = useState("finalSpace")

console.log(bandera, "Este es bandera")

/* Estados de Redux */

const favorites = useSelector(state => state.favorites)
const usuario = useSelector(state => state.usuario)
const carpetas = useSelector(state => state.carpetas)

console.log(favorites.candidates, "Favoritos")

const dispatch = useDispatch()

  useEffect(() => {
   if (bandera === 0){ 
    dispatch(getFavorites(usuario.id));
     setTimeout( () => {setBandera(1)}, 200)
  } 
}, [favorites])

const onDragEnd = (r) => {
  dispatch(addCandidateToFolder({fId: r.destination.droppableId, cId: r.draggableId}))
  console.log(r, "Carta arrastrada")
}

  return (

    <DragDropContext dropD onDragEnd={onDragEnd} >

      <div className={style.globalCont}>

      <Droppable direction='vertical' droppableId='task'>  

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

                {(draggableProvider, snapshot) => 

                <div
                className={`${snapshot.isDragging? 'isDragging' : 'contDragable' }`}
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