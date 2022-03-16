import React, { useEffect, useState } from 'react';
import styles from '../CardFavorite/CardFavorite.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, getFavorites, getFolders, deleteFavorite } from '../../redux/actions'

function CardFavorite ({name, lastname, location, id, image}) {

    const dispatch = useDispatch();
    const logeado = useSelector(state => state.usuario);
    const usuario = useSelector(state => state.usuario);
    const carpetas = useSelector(state => state.carpetas);

    const eliminar = () => {
        dispatch(deleteFavorite({candidateId: id, recruiterId: usuario.id}))
        dispatch(getFavorites(usuario.id))
    } 

    return (
    <div className={styles.Cards}>

    <div className={styles.cont_card}>
        
                <div className={styles.image_container}>
                    <img src={image} alt="Not Found"/>
                </div> 

                <div className={styles.cont_text}>
                    
                    <div>

                        <div className={styles.constSelect}>
                           <select name='Carpetas'>
                                {
                                    carpetas.Folders.map(c => (
                                        <option key={c.folderId} value={c.folderId}>
                                            {c.folderName}
                                        </option>
                                    ))
                                }
                           </select>
                        </div>

                        <div className={styles.delete}>
                            <span onClick={() => {eliminar()}} className="material-icons">
                                clear
                            </span>
                        </div>

                    </div>    

                            <div className={styles.header}>
                                <div className={styles.title}>
                                    <p>{name} {lastname}</p>
                                    <p className={styles.roll}></p>
                                </div>
                            </div> 
                                <div className={styles.footer}>
                                    <h4>{location}</h4>
                                    <span class="material-icons">
                                    place
                                    </span>
                            </div> 
        </div>
    </div> 

    </div>
  )
}

export default CardFavorite

