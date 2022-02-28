import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { CreateCandidate, CreateGame } from '../../redux/actions'
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
    soft_skills: [],
    github: '',
    linkedin: '',
    portfolio: '', 
});

const [paso , setPaso] = useState(0)

/* const dispatch = useDispatch(); */


const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value 
    })
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    /* dispatch(CreateCandidate(state)); */
    alert(`Info send corectly ${state.name} ${state.lastname}`)
  }

  const handleSoftSkills = (e) => {
    setState({
      ...state,
      soft_skills: state.soft_skills.includes(e.target.value) ? state.soft_skills.filter(el => el !== e.target.value) : state.soft_skills.concat(e.target.value)
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

        <div className='completado'>
                {paso === 0 || paso === 1 || paso === 2 ? (<span className="material-icons">radio_button_checked</span>):(<span className="material-icons">radio_button_unchecked</span>)}
                {paso === 1 || paso === 2 ? (<span className="material-icons">radio_button_checked</span>):(<span className="material-icons">radio_button_unchecked</span>)}
                {paso === 2 || paso === 3 ? (<span className="material-icons">radio_button_checked</span>):(<span className="material-icons">radio_button_unchecked</span>)}
        </div>

        <div className={(paso === 0)? 'cont-form' : 'hidden'}>

                <div>
                    <h1>Conecta con tus sueños</h1>
                    <h2>Informacion personal</h2>
                </div>

            <div className='cont-inputs'>  

            <div className='name'>
                <div>
                <input
                placeholder='Name'
                type='text'
                value={state.name}
                name='name'
                onChange={handleChange}
                />
                </div>

                <div>
                <input
                placeholder='Last name'
                type='text'
                value={state.lastname}
                name='lastname'
                onChange={handleChange}
                /> 
                </div> 
            </div>

                <div>
                <input
                placeholder='location'
                type='text'
                value={state.location}
                name='location'
                onChange={handleChange}
                /> 
                </div> 

                <div>
                <input
                placeholder='Porfile picture'
                type='text'
                value={state.image}
                name='image'
                onChange={handleChange}
                /> 
                </div> 

                <div>
                <input
                placeholder='Password'
                type={show.showpassword ? 'text' : 'password'}
                value={state.password}
                name='password'
                onChange={handleChange}
                /> 
             {/*    <button
                    onClick={() => setShow({showpassword: show.showpassword})}
                >
                    Show
                </button> */}
                </div> 

                

            </div>

                <span className='btn' onClick={PasoNext}>Continuar</span>

        </div>
 
        <div className={(paso === 1)? 'cont-form' : 'hidden'}>
            
            <h1>Habilidades</h1>

            <h2>Habilidades blandas</h2>

            <div className='cont-softSkills'> 
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

            <h2>Habilidades tecnicas</h2>
{/* 
            <div className='cont-softSkills'> 
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

            </div> */}
                        
                        
                        <div>
                        <span className='btn' onClick={PasoNext}>Continuar</span>
                        <span className='btn' onClick={PasoBack}>Previous</span>
                        </div>

        </div>

        <div className={(paso === 2)? 'cont-form' : 'hidden'}>

            <div>  

                <div>
                    <h1>Informacion de contacto</h1>
                </div>

                <div>
                <input
                placeholder='GitHub'
                type='text'
                value={state.github}
                name='github'
                onChange={handleChange}
                />
                </div>

                <div>
                <input
                placeholder='LinkedIn'
                type='text'
                value={state.linkedin}
                name='linkedin'
                onChange={handleChange}
                /> 
                </div> 

                <div>
                <input
                placeholder='Email'
                type='email'
                value={state.email}
                name='email'
                onChange={handleChange}
                required
                /> 
                </div> 

                <div>
                <input
                placeholder='Portfolio'
                type='text'
                value={state.portfolio}
                name='portfolio'
                onChange={handleChange}
                /> 
                </div> 

                <span className='btn' onClick={PasoNext}>Continuar</span>
                <span className='btn' onClick={PasoBack}>Previous</span>

            </div>

        </div>

        <div className={(paso === 3)? 'cont-form' : 'hidden'}>
            
            <h1>Haz terminado</h1>            
                        
            <div>
                <span className='btn' onClick={PasoBack}>Previous</span>
            </div>

                <div>
                    <input type='sumbit' className='btn' onClick={handleSumbit} />
                </div>

        </div>


        </form>

  )
}

export default FormCandidate