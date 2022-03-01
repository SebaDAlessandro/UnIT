import React from 'react'
import FormCandidate from '../FormCandidate/FormCandidate'
import FormRecluiter from '../FormRecluiter/FormRecluiter'
import styles from '../HomeForm/HomeForm.module.css'
import { Link, Routes, Route } from 'react-router-dom'

const HomeForm = (e) => {
  return (
    <div className={styles.contenedor}>

        <div className={styles.recluiter}>

            <div className={styles.titler}>
            <Link to='/formr'>
                <h1>Recluiter</h1>
            </Link>
            </div>

            <Link to='/formr'>
            <div className={styles.contImgr}>

            </div>
            </Link>

            <div>
            <Link to='/formr'>
                <button className={styles.btn}>Registrarse</button>
            </Link>
            </div>

        </div>

        <div className={styles.candidate}>

            <div className={styles.titlec}>
            <Link to='/formc'>
                <h1>Candidate</h1>
            </Link>
            </div>

            <Link to='/formc'>
            <div className={styles.contImgc}>

            </div>
            </Link>

            <Link to='/formc'>
                <button className={styles.btn_claro}>Registrarse</button>
            </Link>

        </div>
        
    </div>
  )
}

export default HomeForm
