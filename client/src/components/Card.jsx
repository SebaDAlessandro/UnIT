import React, {useState} from 'react';
import './Card.css'
import { Link } from 'react-router-dom'
import image from './images/Img.jpeg'

function Card () {
    return (
    <div className='Cards'>

    <div className='cont-card'>
                <div className='image-container'>
                    <img src={image} alt=""/>
                </div> 
                <div className='cont-text'>
                        <div className='header'>
                            <div className='title'>
                                <p>Javier Córdoba</p>
                                <p className='roll'>Fronted</p>
                            </div>
                            <span className="material-icons">favorite_border</span>
                            <span className="material-icons">add</span>
                        </div> 
                            <div className='footer'>
                                <h4>skills</h4>
                                <h4>language</h4>
                                <h4>location</h4>
                        </div> 
        </div>
    </div> 

    <Link to='/form'>
    <button>Form</button>
    </Link>

    </div>
  )
}

export default Card
