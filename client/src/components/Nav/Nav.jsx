import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Nav/Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.container}>
        <Link to='/'>
            <p>Home</p>
        </Link>
    </div>
  )
}

export default Nav
