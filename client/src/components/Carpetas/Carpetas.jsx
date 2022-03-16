import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFolders } from '../../redux/actions'
import CardFolder from '../CardFolder/CardFolder'
import { Droppable } from 'react-beautiful-dnd'
import { style } from '@mui/system'
import '../Carpetas/Carpetas.css'

const Carpetas = () => {

    const dispatch = useDispatch()
    const [bandera, setBandera] = useState(0)
    const usuario = useSelector(state => state.usuario)
    const carpetas = useSelector(state => state.carpetas)
    /* console.log(carpetas.Folders, "Estas son las carpetas del componente Carpetas") */

    useEffect(() => {
        if (bandera === 0){
            dispatch(getFolders(usuario.id));
            setTimeout( () => {setBandera(1)}, 100)
          }
    }, [carpetas])

  return (

    <div>
      {carpetas.Folders?.map((n, index) => 
      <Droppable droppableId={`${n.folderId}`} >
        {(droppableProvider, snapshot) => 
        <div
        className={`${snapshot.isDraggingOver? 'contCard' : ''}`}
        {...droppableProvider.droppableProps}
        ref={droppableProvider.innerRef}
        >
        <CardFolder
        key={index}
        name={n.folderName}
        id={n.folderId}
        />
        </div>
        }
      </Droppable>
      )}
    </div>
  )
}

export default Carpetas