import React from 'react';
import styles from '../Card/Card.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, getFavorites, getCandidate } from '../../redux/actions'
import { Link } from 'react-router-dom';

function Card ({name, lastname, description, sskill, tskill, orientation, location, id, image}) {

    const dispatch = useDispatch();
    const logeado = useSelector(state => state.usuario);

    const handleChange = () =>  {
        dispatch(addFavorite({ idrecruiter: logeado.id, idcandidate: id }))
    }

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
                                <p className={styles.roll}>{orientation}</p>
                            </div>
                            <div className={styles.contButons}>
                                <span onClick={handleChange} className="material-icons">favorite_border</span>
                                <Link to={`/perfil/${id}`} >
                                <span onClick={dispatch(getCandidate(id))} className="material-icons">add</span>
                                </Link>
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
