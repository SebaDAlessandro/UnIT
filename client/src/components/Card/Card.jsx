import React, {useState} from 'react';
import styles from '../Card/Card.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite } from '../../redux/actions'

function Card ({name, lastname, location, id, image}) {

    const dispatch = useDispatch();
    const logeado = useSelector(state => state.usuario);

    return (
    <div className={styles.Cards}>

    <div className={styles.cont_card}>
                <div className={styles.image_container}>
                    <img src={image} alt="Not Found"/>
                </div> 
                <div className={styles.cont_text}>
                        <div className={styles.header}>
                            <div className={styles.title}>
                                <p>{name} {lastname}</p>
                                <p className={styles.roll}>Fronted</p>
                            </div>
                            <div className={styles.contButons}>
                                <span className="material-icons">favorite_border</span>
                                <span onClick={() => dispatch(addFavorite({ idrecruiter: logeado.id, idcandidate: id}))} className="material-icons">add</span>
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

export default Card
