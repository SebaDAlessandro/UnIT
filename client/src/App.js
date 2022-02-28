import './App.css';
import Card from './components/Card'
import FormHome from './components/HomeForm/HomeForm'
import { Route, Routes, Link  } from 'react-router-dom'

function App() {
  return (
    <div className='App'>

    <Routes>

      <Route path='/' element={<Card/>}/>

      <Route exact path='/form/*' element={<FormHome/>}/>

    </Routes>

    </div>

  );
}

export default App;