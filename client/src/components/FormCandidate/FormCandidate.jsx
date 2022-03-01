import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { CreateCandidate } from '../../redux/actions'
import { Link } from 'react-router-dom';
import '../FormCandidate/FormCandidate.css'

const FormCandidate = () => {

const [show, setShow] = useState({
    showpassword: false
});

const [state, setState] = useState({
    name: '',
    lastname: '',
    email: '',
    location: '',
    password: '',
    image: '',
    status: '',
    soft_skills: [],
    tecnicalskills: [],
    github: '',
    linkedin: '',
    portfolio: '', 
});

const [paso , setPaso] = useState(0) 

const dispatch = useDispatch(); 


const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value 
    })
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(CreateCandidate(state)); 
    alert(`Info send corectly ${state.name} ${state.lastname}`)
  }

  const handleSoftSkills = (e) => {
    setState({
      ...state,
      soft_skills: state.soft_skills.includes(e.target.value) ? state.soft_skills.filter(el => el !== e.target.value) : state.soft_skills.concat(e.target.value)
  })
  }

  const handleTecnicalSkills = (e) => {
    setState({
      ...state,
      tecnicalskills: state.tecnicalskills.includes(e.target.value) ? state.tecnicalskills.filter(el => el !== e.target.value) : state.tecnicalskills.concat(e.target.value)
  })
  }

  const PasoNext = () => {
    setPaso(paso + 1)
  }

  const PasoBack = () => {
    setPaso(paso - 1)
  }

  return (
    <form className='container' onSubmit={handleSumbit} autoComplete='off'>
        
        <div className='home'>
            <Link to='/form'>
            <span class="material-icons">
                home
            </span>
            </Link>
        </div>

        <div className='completado'>
                {paso === 0 || paso === 1 || paso === 2 ? (<span className="material-icons">radio_button_checked</span>):(<span className="material-icons">radio_button_unchecked</span>)}
                {paso === 1 || paso === 2 ? (<span className="material-icons">radio_button_checked</span>):(<span className="material-icons">radio_button_unchecked</span>)}
                {paso === 2 || paso === 3 ? (<span className="material-icons">radio_button_checked</span>):(<span className="material-icons">radio_button_unchecked</span>)}
        </div>

        <div className={(paso === 0)? 'cont-personal' : 'hidden'}>

                <div className='contImg'>
                    
                </div>


            <div className='cont-inputs'>  

                    <div className='contTitle'>
                        <h1>Información personal</h1>
                    </div>

                
                    <div className='input_form'>
                    <input
                        type='text'
                        value={state.name}
                        name='name'
                        onChange={handleChange}
                        required
                        />
                        <label className='lbl_nombre'>
                                <span className='text_nomb'>
                                    Nombre
                                </span>
                            </label>
                    </div>

                    <div className='input_form'>
                    <input
                        type='text'
                        value={state.lastname}
                        name='lastname'
                        onChange={handleChange}
                        required
                        /> 
                        <label className='lbl_nombre'>
                                    <span className='text_nomb'>
                                        Apellidos
                                    </span>
                                </label>
                    </div>

                    <div className='input_form'>
                        <input
                        type='text'
                        value={state.location}
                        name='location'
                        onChange={handleChange}
                        required
                        /> 
                            <label className='lbl_nombre'>
                                <span className='text_nomb'>
                                    Ubicación
                                </span>
                            </label>
                    </div> 

                    <div className='input_form'>
                     <select
                     value={state.status}
                     name='status'
                     onChange={handleChange}>
                         <option>Trabajando</option>
                         <option>Busqueda Activa</option>
                         <option>Estudiando</option>
                     </select>
                    </div>

                    <div className='input_form'>
                        <input
                        type='text'
                        value={state.image}
                        name='image'
                        onChange={handleChange}
                        required
                        /> 
                            <label className='lbl_nombre'>
                                    <span className='text_nomb'>
                                        Foto perfil
                                    </span>
                                </label>
                    </div> 

                    <div className='input_form'>
                        <input
                        type={show.showpassword ? 'text' : 'password'}
                        value={state.password}
                        name='password'
                        onChange={handleChange}
                        required
                        /> 
                            <label className='lbl_nombre'>
                                    <span className='text_nomb'>
                                        Contraseña
                                    </span>
                                </label>
                    </div> 
           
                    <span className='btn' onClick={PasoNext}>Continuar</span>
                   

            </div>


        </div>
 
        <div className={(paso === 1)? 'cont-form' : 'hidden'}>

            <div className='contImg'>
                    
            </div>

            <div className='cont'>

            <div className='cont-softSkills'> 

            <h1>Habilidades</h1>

            <h2>Habilidades blandas</h2>

            <div className='contHabilidades'>

                        <div className='check-soft_skills'>
                            <input id='Compañerismo' value="Compañerismo" type="checkbox" name="soft_skills" onChange={handleSoftSkills}/>
                            <label htmlFor='Compañerismo'>Compañerismo</label>
                        </div>
                        <div className='check-soft_skills'>
                            <input id='Amable' value="Amable" type="checkbox" name="soft_skills" onChange={handleSoftSkills}/>
                            <label htmlFor='Amable'>Amable</label>
                        </div>
                        <div className='check-soft_skills'>
                            <input id='Amigable' value="Amigable" type="checkbox" name="soft_skills" onChange={handleSoftSkills}/>
                            <label htmlFor='Amigable'>Amigable</label>
                        </div>
                        <div className='check-soft_skills'>
                            <input id='Lindo' value="Lindo" type="checkbox" name="soft_skills" onChange={handleSoftSkills}/>
                            <label htmlFor='Lindo'>Lindo</label>
                        </div>
                        <div className='check-soft_skills'>
                            <input id='Trabajo_Team' value="Trabajo en equipo" type="checkbox" name="soft_skills" onChange={handleSoftSkills}/>
                            <label htmlFor='Trabajo_Team'>Trabajo en equipo</label>
                        </div>

            </div>            

            </div>

 
            <div className='cont-softSkills'> 

            <h2>Habilidades tecnicas</h2>

            <div className='contHabilidades'>

                        <div className='check-soft_skills'>
                            <input id='react' value="react" type="checkbox" name="tecnicalskills" onChange={handleTecnicalSkills}/>
                            <label htmlFor='react'>React</label>
                        </div>
                        <div className='check-soft_skills'>
                            <input id='nodejs' value="nodejs" type="checkbox" name="tecnicalskills" onChange={handleTecnicalSkills}/>
                            <label htmlFor='nodejs'>NodeJs</label>
                        </div>
                        <div className='check-soft_skills'>
                            <input id='expressjs' value="expressjs" type="checkbox" name="tecnicalskills" onChange={handleTecnicalSkills}/>
                            <label htmlFor='expressjs'>ExpressJS</label>
                        </div>
                        <div className='check-soft_skills'>
                            <input id='redux' value="redux" type="checkbox" name="tecnicalskills" onChange={handleTecnicalSkills}/>
                            <label htmlFor='redux'>Redux</label>
                        </div>
                        <div className='check-soft_skills'>
                            <input id='angular' value="angular" type="checkbox" name="tecnicalskills" onChange={handleTecnicalSkills}/>
                            <label htmlFor='angular'>Angular</label>
                        </div>

            </div>           

                            <span className='btn' onClick={PasoNext}>Continuar</span>
                            <span className='btn' onClick={PasoBack}>Anterior</span>
                       
            </div> 

            </div>
                        
                        

        </div>

        <div className={(paso === 2)? 'cont-personal' : 'hidden'}>

            <div className='contImg'>
                    
            </div>

            <div className='cont-inputs'>  

                <div className='contTitle'>
                        <h1>Información de contacto</h1>
                    </div>

                <div className='input_form'>
                <input
                type='text'
                value={state.github}
                name='github'
                onChange={handleChange}
                required
                />
                   <label className='lbl_nombre'>
                                    <span className='text_nomb'>
                                        GitHub
                                    </span>
                                </label>
                </div>

                <div className='input_form'>
                <input
                type='text'
                value={state.linkedin}
                name='linkedin'
                onChange={handleChange}
                required
                /> 
                   <label className='lbl_nombre'>
                                    <span className='text_nomb'>
                                    LinkedIn
                                    </span>
                                </label>
                </div> 

                <div className='input_form'>
                <input
                type='text'
                value={state.email}
                name='email'
                onChange={handleChange}
                required
                /> 
                   <label className='lbl_nombre'>
                                    <span className='text_nomb'>
                                        Correo electronico
                                    </span>
                                </label>
                </div> 

                <div className='input_form'>
                <input
                type='text'
                value={state.portfolio}
                name='portfolio'
                onChange={handleChange}
                required
                /> 
                   <label className='lbl_nombre'>
                                    <span className='text_nomb'>
                                        Portafolio
                                    </span>
                                </label>
                </div> 

                <span className='btn' onClick={PasoNext}>Continuar</span>
                <span className='btn' onClick={PasoBack}>Previous</span>

            </div>

        </div>

        <div className={(paso === 3)? 'cont-personal' : 'hidden'}>

            <div className='contImg'>
                    
            </div>
            
            <div className='cont-inputs'>

                <h1>Haz terminado</h1>            
                    
                   
                        <button
                        className='btn' 
                        type='sumbit' 
                        onClick={handleSumbit}>Crear</button>
                        <span className='btn' onClick={PasoBack}>Previous</span>
                   


                

            </div>

        </div>


        </form>

  )
}

export default FormCandidate