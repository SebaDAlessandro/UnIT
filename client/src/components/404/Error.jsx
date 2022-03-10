import React from 'react'
import error from '../images/404.png'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div>
      <img src={error} alt='Not Found' />
      <Link to='/'>
      <button>Porque eres tan estresante y intentas entrar a donde no puedes? dale click aquí y ingresa como una persona normal</button>
      </Link>
    </div>
  )
}

export default Error
