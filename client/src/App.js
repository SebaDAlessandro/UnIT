import './App.css';
import { cambiarlogeo } from '../src/redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Home from './components/Home/Home'
import FormHome from './components/HomeForm/HomeForm'
import LogIn from './components/LogIn/LogIn'
import FormCandidate from './components/FormCandidate/FormCandidate';
import FormRecluiter from './components/FormRecluiter/FormRecluiter';
import HomeRecluiter from './components/HomeRecluiter/HomeRecluiter'
import About from './components/About/About'
import FoldersFavorites from './components/FoldersFavorites/FoldersFavorites'
import Error from './components/404/Error'
import { Route, Routes, useNavigate } from 'react-router-dom'
import FavCart from './components/FavCart/FavCart';
import Profile from "./components/Profile/Profile"
import ArchivosCarpetas from './components/ArchivosCarpetas/ArchivosCarpetas';
import BusquedaFiltro from './components/BusquedaFiltro/BusquedaFIltro';
import Uwoman from './components/UnitWoman/UnitWoman';
import Portfolio from './components/Portfolio/Portfolio';


function App() {

  const [mostrar, setMostrar] = useState(false);

  const logeado = useSelector(state => state.logeado)
  const usuarios = useSelector(state => state.usuario)
  const dispatch = useDispatch();
  const id = JSON.parse(localStorage.getItem('id')) 

  useEffect(() => {
    if (logeado === false && id) {
    dispatch(cambiarlogeo(id))
    } 
    setTimeout(() => {setMostrar(true)}, 400)
  }, [logeado, dispatch])

  return (

    <div className='App'>

    { mostrar === false ? <h1>Cargando...</h1> :

    <Routes>

      <Route path='/' element={usuarios.length === 0 ?  <LogIn/> : typeof usuarios.id === 'string' ? <Profile/> : <HomeRecluiter/>}/>
      
      <Route path='/prueba' element={<BusquedaFiltro/>}/>

      <Route exact path='/form' element={<FormHome/>}/>

      <Route exact path='/formr' element={<FormRecluiter/>}/>

      <Route exact path='/formc' element={<FormCandidate/>}/>
  
      <Route exact path='/home' element={usuarios.length === 0 ?  <LogIn/> : typeof usuarios.id === 'number' ? <Home/> : <Error/>}/>
      
      <Route exact path='/about' element={<About/>}/>

      <Route exact path='/profilecandidate' element={<Profile/>}/>

      <Route exact path='/unitwoman' element={<Uwoman/>}/>

      <Route exact path='/favorites' element={usuarios.length === 0 ?  <LogIn/> : typeof usuarios.id === 'number' ? <FoldersFavorites/> : <Error/>}/>

      <Route exact path='/homerecluiter' element={usuarios.length === 0 ?  <LogIn/> : typeof usuarios.id === 'number' ? <HomeRecluiter/> : <Error/>}/>

      <Route exact path='/folders' element={logeado === false ? <Error/> : <FavCart/>}/>

      <Route exact path='/carpetas/:id' element={usuarios.length === 0 ?  <LogIn/> : typeof usuarios.id === 'number' ? <ArchivosCarpetas/> : <Error/>}/>

      <Route exact path='/portfolio' element={logeado === false ? <Error/> : <Portfolio/>}/>

    </Routes>

    }

    </div>
    );
}

export default App;