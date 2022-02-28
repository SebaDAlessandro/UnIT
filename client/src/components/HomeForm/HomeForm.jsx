import React from 'react'
import FormCandidate from '../FormCandidate/FormCandidate'
import FormRecluiter from '../FormRecluiter/FormRecluiter'
import styles from '../HomeForm/HomeForm.module.css'
import { Link, Routes, Route } from 'react-router-dom'

const HomeForm = (e) => {
  return (
    <div className={styles.contenedor}>
        <Link to={`/form/${e}`}>
            <button className={styles.btn}>Home</button>
        </Link>

        <Link to='formr'>
            <button className={styles.btn}>Recluiter</button>
        </Link>

        <Link to='formc'>
            <button className={styles.btn}>Candidate</button>
        </Link>

            <Routes>
                <Route exact path='/formr/' element={<FormRecluiter/>}/>
                <Route exact path='/formc/' element={<FormCandidate/>}/>
            </Routes>
        
    </div>
  )
}

export default HomeForm
