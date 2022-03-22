import React from 'react'
import error from '../images/404.png'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div>
      <img src={error} alt='Not Found' />
      <Link to='/'>
      <button>Volver</button>
      </Link>
    </div>
  )
}

export default Error
