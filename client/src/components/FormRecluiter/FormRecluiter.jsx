import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CreateRecluiter } from '../../redux/actions'
import styles from '../FormRecluiter/FormRecluiter.module.css'
import { Link } from 'react-router-dom'

const FormRecluiter = () => {

    const [state, setState] = useState({
        name: '',
        lastname: '',
        email: '',
        organization: '',
        password: '',
        image: '',
        location: '',
        description: ''

    })

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(CreateRecluiter(state)); 
        alert(`Info send corectly ${state.name} ${state.lastname}`)
      }

    const dispatch = useDispatch();

  return (
    <div>
        <form onSubmit={handleSumbit} className={styles.container} autoComplete="off">

        <div className={styles.home}>
                <Link to='/'>
                <span className="material-icons">
                    home
                </span>
                </Link>
            </div> 

    <div className={styles.contGlobal}>

        <div className='contImg'>
                    
        </div>

        <div className={styles.cont_inputs}>
         
            <div className='contTitle'>
                <h1>Información personal</h1>
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
                        Nombre
                        </span>
                    </label>
            </div>

            <div className={styles.input_form}>
                <input
                type='text'
                value={state.lastname}
                name='lastname'
                onChange={handleChange}
                required
                />
                    <label className={styles.lbl_nombre}>
                        <span className={styles.text_nomb}>
                        Apellidos
                        </span>
                    </label>
            </div>

            <div className={styles.input_form}>
                <input
                type='text'
                value={state.email}
                name='email'
                onChange={handleChange}
                required
                />
                    <label className={styles.lbl_nombre}>
                        <span className={styles.text_nomb}>
                        Correo
                        </span>
                    </label>
            </div>

            <div className={styles.input_form}>
                <input
                type='text'
                value={state.organization}
                name='organization'
                onChange={handleChange}
                required
                />
                    <label className={styles.lbl_nombre}>
                        <span className={styles.text_nomb}>
                        Organización
                        </span>
                    </label>
            </div>

            <div className={styles.input_form}>
                <input
                type='text'
                value={state.password}
                name='password'
                onChange={handleChange}
                required
                />
                    <label className={styles.lbl_nombre}>
                        <span className={styles.text_nomb}>
                        Contraseña
                        </span>
                    </label>
            </div>

            <div className={styles.input_form}>
                <input
                type='text'
                value={state.image}
                name='image'
                onChange={handleChange}
                required
                />
                    <label className={styles.lbl_nombre}>
                        <span className={styles.text_nomb}>
                        Foto perfil
                        </span>
                    </label>
            </div>

            <div className={styles.input_form}>
                <input
                type='text'
                value={state.location}
                name='location'
                onChange={handleChange}
                required
                />
                    <label className={styles.lbl_nombre}>
                        <span className={styles.text_nomb}>
                        Ubicación
                        </span>
                    </label>
            </div>
           
            <div className={styles.input_form}>
                <input
                type='text'
                value={state.description}
                name='description'
                onChange={handleChange}
                required
                />
                    <label className={styles.lbl_nombre}>
                        <span className={styles.text_nomb}>
                        Descripción
                        </span>
                    </label>
            </div>

                        <button
                        className='btn' 
                        type='sumbit' 
                        onClick={handleSumbit}>Crear</button>

          </div>

        </div>

        </form>
    </div>
  )
}

export default FormRecluiter
