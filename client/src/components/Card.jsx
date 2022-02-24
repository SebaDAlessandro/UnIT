import React, {useState} from 'react';
import './Card.css'

function Cards() {
    return (
    <div className='Cards'>
        <div className='upper-container'>
            <div className='image-container'>
                <img src="./images/dogs3.jpg" alt="" height="100px" width="100px"/>
            </div>
            <h3>name</h3>
            <h3>position</h3>
        </div>
        <div className='lower-container'>
            <h4>skills</h4>
            <h4>soft</h4>
            <h4>language</h4>
            <h4>location</h4>
            <button>{"<3 (Fav)"}</button>
            <button>Portfolio</button>
        </div>
    </div>
  )
}

export default Cards