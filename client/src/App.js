import './App.css';
import Card from './components/Card';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Card/>
      </div>
    </BrowserRouter>
  );
}

export default App;
