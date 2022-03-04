import './App.css';
import Home from './components/Home/Home'
import FormHome from './components/HomeForm/HomeForm'
import LogIn from './components/LogIn/LogIn'
import FormCandidate from './components/FormCandidate/FormCandidate';
import FormRecluiter from './components/FormRecluiter/FormRecluiter';
import About from './components/About/About'
import { Route, Routes, Link  } from 'react-router-dom'

function App() {
  return (
    <div className='App'>

    <Routes>

      <Route path='/' element={<LogIn/>}/>

      <Route exact path='/form' element={<FormHome/>}/>

      <Route exact path='/formr' element={<FormRecluiter/>}/>

      <Route exact path='/formc' element={<FormCandidate/>}/>
  
      <Route exact path='/home' element={<Home/>}/>
      
      <Route exact path='/about' element={<About/>}/>

    </Routes>

    </div>

  );
}

export default App;