import React from 'react'
import style from '../CardFolder/CardFolder.module.css'
import { Link } from 'react-router-dom'
import { deleteFolder, getFolders } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const CardFolder = ({name, id}) => {

  const dispatch = useDispatch();

  const usuario = useSelector(state => state.usuario)

  const borrarCarpeta = () => {
    dispatch(deleteFolder({idFolder: parseInt(id, 10)}))
    setTimeout(() => {dispatch(getFolders(usuario.id))}, 400)
  }

  return (
    <div>
    <Link to={`/carpetas/${id}`}>
    <div className={style.contenedor}>
        <div className={style.folder}>
            <span class="material-icons">
                folder
            </span>
        </div>
            <div className={style.name}>
                <p>{name}</p>
            </div>
    </div>
    </Link>
            <div onClick={() => {borrarCarpeta()}} className={style.delete}>
              <span class="material-icons-outlined">
                clear
              </span>
            </div>
            </div>
  )
}

export default CardFolder
