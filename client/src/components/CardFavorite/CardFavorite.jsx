import React, { useEffect, useState } from 'react';
import styles from '../CardFavorite/CardFavorite.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, getFavorites, getFolders, deleteFavorite, addCandidateToFolder } from '../../redux/actions'

function CardFavorite ({name, lastname, location, id, image, size}) {

    const dispatch = useDispatch();
    const logeado = useSelector(state => state.usuario);
    const usuario = useSelector(state => state.usuario);
    const carpetas = useSelector(state => state.carpetas);

    const eliminar = () => {
        dispatch(deleteFavorite({candidateId: id, recruiterId: usuario.id}))
        setTimeout(() => {dispatch(getFavorites(usuario.id))}, 400)
    } 

    const [state, setState] = useState(0)

   /*  useEffect(() => {
      if (state !== 0){
          validar()
          setState(0)
      }
    }, [state]) 


    const validar = () => {
        console.log({
            folderId: state,
            userId: id
        })
    } */

    return (
    <div className={`${size === 'cuatro'? styles.Cards : styles.sizeChange} `}>

    <div className={styles.cont_card}>
        
                <div className={styles.image_container}>
                    <img src={image} alt="Not Found"/>
                </div> 

                <div className={styles.cont_text}>
                    
                    <div>

                        <div className={styles.constSelect}>
                           <select /* value={} */ /* onChange={setState(3)} */ name='folderId'>
                                {
                                    carpetas.Folders.map(c => (
                                        <option /* onChange={handleChange} */ name='folderId' key={c.folderId} value={c.folderId}>
                                            {c.folderName}
                                            {c.folderId}
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

