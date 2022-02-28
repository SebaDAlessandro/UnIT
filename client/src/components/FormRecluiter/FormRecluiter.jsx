import React from 'react'
import { useState } from 'react'
import styles from '../FormRecluiter/FormRecluiter.module.css'

const FormRecluiter = () => {

    const [state, setState] = useState({
        name: '',

    })

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

  return (
    <div>
        <form className={styles.container} autocomplete="off">

        <div className={styles.cont_inputs}>
         
            <div className={styles.input_form}>
                <input
                type='text'
                value={state.name}
                name='name'
                onChange={handleChange}
                required
                />
                    <label className={styles.lbl_nombre}>
                        <span className={styles.text_nomb}>
                        Name
                        </span>
                    </label>
            </div>

            <div className={styles.input_form}>
                <input
                type='text'
                value={state.name}
                name='name'
                onChange={handleChange}
                required
                />
                    <label className={styles.lbl_nombre}>
                        <span className={styles.text_nomb}>
                        Contraseña
                        </span>
                    </label>
            </div>

          </div>

        </form>
    </div>
  )
}

export default FormRecluiter
