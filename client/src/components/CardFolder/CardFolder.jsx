import React from 'react'
import style from '../CardFolder/CardFolder.module.css'

const CardFolder = ({name}) => {
  return (
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
  )
}

export default CardFolder
