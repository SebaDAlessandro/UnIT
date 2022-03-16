import React from 'react'
import style from '../CardFolder/CardFolder.module.css'
import { Link } from 'react-router-dom'

const CardFolder = ({name, id}) => {

  return (
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
  )
}

export default CardFolder
