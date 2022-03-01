import './App.css';
import Cards from './components/Cards/Cards'
import FormHome from './components/HomeForm/HomeForm'
import LogIn from './components/LogIn/LogIn'
import FormCandidate from './components/FormCandidate/FormCandidate';
import FormRecluiter from './components/FormRecluiter/FormRecluiter';
import { Route, Routes, Link  } from 'react-router-dom'

function App() {
  return (
    <div className='App'>

    <Routes>

      <Route path='/' element={<LogIn/>}/>

      <Route exact path='/form' element={<FormHome/>}/>

      <Route exact path='/formr' element={<FormRecluiter/>}/>

      <Route exact path='/formc' element={<FormCandidate/>}/>
  
      <Route exact path='/home' element={<Cards/>}/>

    </Routes>

    </div>

  );
}

export default App;