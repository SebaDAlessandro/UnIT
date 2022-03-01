import React from 'react'
import style from '../LogIn/LogIn.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {

    const [state, setState] = useState({
        name: '',
        password: ''
    })

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form className={style.container} autoComplete='off'>

                <div className={style.conecta}>
                    <div className={style.titulo}>
                        <h1>Conecta</h1>
                        <h1>con tu</h1>
                        <h1>futuro</h1>
                        <Link to='/home'>
                        <p>Explora</p>
                        </Link>
                    </div>
                    <div className={style.cohete}>

                    </div>

                </div>

                <div className={style.containerInputs}>

                    <div>
                        <h1>Iniciar sesión</h1>
                    </div>

                    <div className={style.input_form}>
                        <input
                            type='text'
                            value={state.name}
                            name='name'
                            onChange={handleChange}
                            required
                        />
                        <label className={style.lbl_nombre}>
                            <span className={style.text_nomb}>
                                Usuario
                            </span>
                        </label>
                    </div>

                    <div className={style.input_form}>
                        <input
                            type='text'
                            value={state.password}
                            name='password'
                            onChange={handleChange}
                            required
                        />
                        <label className={style.lbl_nombre}>
                            <span className={style.text_nomb}>
                                Contraseña
                            </span>
                        </label>
                    </div>

                    <div className={style.contOlvidar}>
                        <p className={style.olvidar}>Olvide mi contraseña</p>
                    </div>

                    <div className={style.containerbtn}>

                        <div className={style.contbtn}>
                            <button className={style.inicio}>Iniciar Sesion</button>
                        </div>

                        <div className={style.contbtn}>
                            <Link to='/form'>
                            <button className={style.crear}>Crear Cuenta</button>
                            </Link>
                        </div>

                    </div>

                </div>

            </form>
        </div>
    )
}

export default LogIn;