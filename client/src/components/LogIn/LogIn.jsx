import React from 'react'
import style from '../LogIn/LogIn.module.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Login } from '../../redux/actions'
import { Link } from 'react-router-dom'
import 'animate.css';

const LogIn = () => {

    const [logeado, setLogeado] = useState(false)

    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const usuarios = useSelector(state => state.usuario)
    console.log(usuarios, 'Prueba')

    const dispatch = useDispatch();
    const history = useNavigate();

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        setLogeado(true)
        dispatch(Login(state)); 
      }

    useEffect(() => {
        if (logeado === true && usuarios !== []){
            if(typeof usuarios.id === 'string'){
                history('/profilecandidate')
            } else {
                history('/homerecluiter')
            }
            /* console.log('Alguien se logeo', usuarios.id) */
            setLogeado(false)
        }
    }, [usuarios]) 

    return (
        <div className={style.global_cont}>

            <form onSubmit={handleSumbit} className={style.container} autoComplete='off'>

                <div className={style.conecta}>
                    <div className={style.titulo}>
                        <h1>Conecta</h1>
                        <h1>con tu</h1>
                        <h1>futuro</h1>
                    </div>
                    
                    <div className={style.cohete}>
                    </div>

                </div>

                <div className={style.containerInputs}>

                <Link to='/about'>
                    <p className={style.about}>Sobre Nosotros</p>
                </Link>

                    <div>
                        <h1>Iniciar sesión</h1>
                    </div>

                    <div className={style.input_form}>
                        <input
                            type='text'
                            value={state.email}
                            name='email'
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
                            type='password'
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
                            <button className={style.inicio}>Iniciar Sesión</button>
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