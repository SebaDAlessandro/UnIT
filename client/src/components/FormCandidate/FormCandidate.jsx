import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CreateCandidate, getLocations, getSoft, getTech, getGeneros, getSeniority, getIdiomas, getNivel } from '../../redux/actions'
import { Link, useNavigate } from 'react-router-dom';
import UploadImage from '../UploadImage/UploadImage'
import '../FormCandidate/FormCandidate.css'

const FormCandidate = () => {

/* Cloudinary */

const [image, setImage] = useState("")
const[loading, setLoading] = useState(false);

const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', "au1jdovv");
    setLoading(true);
    const res = await fetch(
        'https://api.cloudinary.com/v1_1/dswadm5bw/image/upload',
        {
            method: "POST",
            body: data,
        }
    )
    const file = await res.json();
    console.log(res)
    setState({
        ...state, image: file.secure_url
      })
    // console.log(file.secure_url)
    setLoading(false)
}

/* ----------------------------------------------------- */

/* Logica subir pdf */

function guardarArchivo(e) {
    var file = e.target.files[0] //the file
    var reader = new FileReader() //this for convert to Base64 
    reader.readAsDataURL(e.target.files[0]) //start conversion...
    reader.onload = function (e) { //.. once finished..
      var rawLog = reader.result.split(',')[1]; //extract only thee file data part
      var dataSend = { dataReq: { data: rawLog, name: file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
      fetch('https://script.google.com/macros/s/AKfycbwBddJMNYLnMXShhi3pa8k8RgfKeQ7rohp05ZN-gwGHmszjmWeFjWkUBlZqv0UcTMcK/exec', //your AppsScript URL
        { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
        .then(res => res.json()).then((a) => {
          console.log(a) //See response
        }).catch(e => console.log(e)) // Or Error in console
    }
  }

/* ----------------------------------------------------- */

const [idioma, setIdioma] = useState({})

const [state, setState] = useState({
    name: '', 
    lastname: '', 
    email: '', 
    description: '', 
    status: '', 
    image: '', 
    password: '',
    linkedin: '', 
    github: '', 
    portfolio: '', 
    cv: '', 
    location: '', 
    senority: '', 
    orientation: '', 
    gender: '', 
    sskill: [], 
    tskill:[], 
    language: [],
    level: []
});

/* Arreglo niveles */

const niveles = [
    {nivel: 'A0'}, 
    {nivel:'A1'}, 
    {nivel:'A2'}, 
    {nivel:'B1'}, 
    {nivel:'B2'}, 
    {nivel:'C1'}, 
    {nivel:'C2'}, 
    {nivel:'Native'}
]

/* Estods redux */

const locations = useSelector(state => state.locations)
const soft = useSelector(state => state.soft)
const tech = useSelector(state => state.tech)
const generos = useSelector(state => state.generos)
const seniority = useSelector(state => state.seniority)
const idiomas = useSelector(state => state.idiomas)

useEffect(() => {
    dispatch(getLocations())
    dispatch(getSoft())
    dispatch(getTech())
    dispatch(getGeneros())
    dispatch(getSeniority())
    dispatch(getIdiomas())
    dispatch(getNivel())
}, [])

const history = useNavigate();

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
    history('/homerecluiter')
  }

  const handleImageurl = (imageurl) => {
    setState({
        ...state,
        image: state.image.includes(imageurl)
    })
    dispatch(CreateCandidate(state)); 
    alert(`Info send corectly ${state.name} ${state.lastname}`)
  }

  const handleSoftSkills = (e) => {
    setState({
      ...state,
      sskill: state.sskill.includes(e.target.value) ? state.sskill.filter(el => el !== e.target.value) : state.sskill.concat(e.target.value)
  })
  }

  const handleIdiomas = (e) => {
    setState({
        ...state,
        language: state.language.includes(e.target.value) ? state.language.filter(el => el !== e.target.value) : state.language.concat(e.target.value)
    })
  }

  const handletskill = (e) => {
    setState({
      ...state,
      tskill: state.tskill.includes(e.target.value) ? state.tskill.filter(el => el !== e.target.value) : state.tskill.concat(e.target.value)
  })
  }

  const PersonalInfoNext = () => {
    if(state.name === '' ) {
        alert('El campo de nombre es obligatorio')
        } 
    else if (state.lastname === '') {
        alert('El campo de apellidos es obligatorio')
    }
    else if (state.location === '') {
        alert('El campo de locación es obligatorio')
    }
    else if (state.password === '') {
        alert('El campo de contraseña es obligatorio')
    }
    else if (state.status === '') {
        alert('El campo de  es obligatorio')
    }
     
      else {
        setPaso(paso + 1)  
      }
  }

  const HabilidadesNext = () => {
    if (state.sskill.length === 0) {
        alert('Las habilidades blandas son obligatorias')
    }
    else {
        setPaso(paso + 1)  
    }
      
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
                    <select value={state.location} onChange={handleChange} name='location'>
                    <option value="value1">Ubicaciones</option>
                                {
                                    locations?.map(c => (
                                        <option key={c.id} value={c.location}>{c.location}</option>
                                    ))
                                }
                    </select>
                    </div>

                    <div className='input_form'>
                    <select value={state.gender} onChange={handleChange} name='gender'>
                    <option value="value1">Genero</option>
                                {
                                    generos?.map(c => (
                                        <option key={c.id} value={c.gender}>{c.gender}</option>
                                    ))
                                }
                    </select>
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
                    <div style={{textAlign: "center"}}>
                     <div>
                        <input
                            type="file"
                            name="file"

                            placeholder="Sube tu imágen aquí"
                            onChange={uploadImage}
                        />
                            {loading ? (<h3>Cargando imagen...</h3>) : (<img src={image} style={{width:"300px"}}/>)}
                        </div>
                    </div>
                    </div> 

                    {/* Input para pdfs */}

                    <input type="file" accept="application/pdf" id="customFile" onChange={(e) => guardarArchivo(e)} />

                    <div className='input_form'>
                        <input
                        type='password'
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
           
                    <span className='btn' onClick={PersonalInfoNext}>Continuar</span> 

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

                {soft.map(c => (
                <div className='check-sskill'>
                            <input id={c.id} value={c.soft_skill} type="checkbox" name="sskill" onChange={handleSoftSkills}/>
                            <label htmlFor={c.id}>{c.soft_skill}</label>
                </div>))}

            </div>            

            </div>

 
            <div className='cont-softSkills'> 

            <h2>Habilidades técnicas</h2>

            <div className='contHabilidades'>

                {tech.map(c => (
                <div className='check-sskill'>
                            <input id={c.technicalskills} value={c.technicalskills} type="checkbox" name="tskill" onChange={handletskill}/>
                            <label htmlFor={c.technicalskills}>{c.technicalskills}</label>
                </div>))}

            </div>           

                            <span className='btn' onClick={HabilidadesNext}>Continuar</span>
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
                                        Correo electrónico
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
                <span className='btn' onClick={PasoBack}>Anterior</span>

            </div>

            <div className='input_form'>
                    <input
                        type='text'
                        value={state.orientation}
                        name='orientation'
                        onChange={handleChange}
                        required
                        /> 
                        <label className='lbl_nombre'>
                                    <span className='text_nomb'>
                                        Area desarrollo
                                    </span>
                                </label>
                    </div>

                    <div className='input_form'>
                    <select value={state.senority} onChange={handleChange} name='senority'>
                    <option value="value1">Senority</option>
                                {
                                    seniority?.map(c => (
                                        <option key={c.id} value={c.senority}>{c.senority}</option>
                                    ))
                                }
                    </select>
                    </div>

                   {/*  <div className='input_form'>
                    <select value={state.language} onChange={((e) => setIdioma(...idioma, [e.target.value] ))} name='language'>
                    <option value="value1">Idiomas</option>
                                {
                                    idiomas?.map(c => (
                                        <option key={c.id} value={c.language}>{c.language}</option>
                                    ))
                                }
                    </select>
                    </div> */}

                    <div>
                    {idiomas.map(c => (
                    <div className='idiomas'>
                            <input id={c.language} value={c.language} type="checkbox" name="language" onChange={handleIdiomas}/>
                            <label htmlFor={c.language}>{c.language}</label>
                    </div>
                    ))}
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
                        <span className='btn' onClick={PasoBack}>Anterior</span>


            </div>

        </div>


        </form>

  )
}

export default FormCandidate