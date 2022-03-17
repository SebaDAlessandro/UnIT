import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFolders, createFolder } from '../../redux/actions'
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

    const [mostrar, setMostrar] = useState(true);

    const [carpeta, setCarpeta] = useState({
      recruiterId: usuario.id,
      folderName: ''
  })

    useEffect(() => {
        if (bandera === 0){
            dispatch(getFolders(usuario.id));
            setTimeout( () => {setBandera(1)}, 100)
          }
    }, [carpetas])

    const handleChange = (e) => {
      setCarpeta({...carpeta, [e.target.name]: e.target.value})
  } 

  const handleSumbit = (e) => {
      e.preventDefault();
      dispatch(createFolder(carpeta))
      setMostrar(false)
      setTimeout(() => {
        setMostrar(true)
        dispatch(getFolders(usuario.id))
      }, 400)
  }

  return (

    <div>

      <h1>Tus carpetas.</h1>

      <form  className={style.container} onSubmit={handleSumbit}>

      <input
      className={style.input}
      type='text'
      value={carpeta.folderName}
      name='folderName'
      placeholder='Nombre carpeta'
      onChange={handleChange}
      />

      <button
      type='submit'
      />

      </form>
      {mostrar === false? 
      <h1>Cargando...</h1> 
      :
      carpetas.Folders?.map((n, index) => 
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
      )
      }
      
    </div>
  )
}

export default Carpetas