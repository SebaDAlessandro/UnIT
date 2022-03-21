import React, { useState } from 'react'
import style from '../Portfolio/Portfolio.module.css'
import NavPortafolio from './NavPortafolio'
import Hello from './Hello'
import SobreMi from './SobreMi'
import Habilidades from './Habilidades'
import Footer from './Footer'
import Projects from './Projects'

const Portfolio = () => {
    const [state, setState] = useState({
        colorfondo: '',
        colorletra: ''
    })
    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: [e.target.value]
        })
        console.log(state)
    }

    function handleSubmit(){
        boto(state.colorfondo,state.colorletra)
    }



    /*   window.onscroll = function() {
          console.log("Vertical: " + window.scrollY);
          console.log("Horizontal: " + window.scrollX);
      }; */
    function boto(colorFondo,colorLetra) {
        const color = document.getElementById('global')
        color.style.setProperty('--colorLetra', colorFondo)
        color.style.setProperty('--colorFondo', colorLetra)
    }
    return (
        <div id="global" className={style.globalContainer}>
            <div>
                <input
                    type="color"
                    value={state.colorletra}
                    name='colorletra'
                    onChange={handleChange}
                />
                <input
                    type="color"
                    value={state.colorfondo}
                    name='colorfondo'
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Cambiar</button>
            </div>
            <NavPortafolio />
            <Hello />
            <SobreMi />
            <Habilidades />
            <Projects />
            <Footer />
        </div>
    )
}

export default Portfolio
