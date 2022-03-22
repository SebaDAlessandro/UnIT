import React from 'react'
import style from '../UnitWoman/UnitWoman.module.css'
import logo from '../images/LogoNav.png'
import { Link } from 'react-router-dom'  
import 'animate.css';
import TextMobileStepper from "./Carrusel"

export default function Slider() {
  return (
    <div className={style.contGlobal}>
      
      <div id='0' className={style.home}>
        <div className={style.gridHome}>
          <div className={style.textHome}>
          <Link to='/homerecluiter'>
      <p>Home</p>
      </Link>
          <div className={style.logo}><img src={logo} alt='Not Found' /></div>
            <h1>UnIT Woman </h1>
            <div>
              <a href='#1' className={style.botonHome}>Nuestro Objetivo</a>
            </div>
            <div className={style.arrow} >
                    <a className={style.dropdown} href='#1'>
                      <span className="material-icons animate__bounce">
                        arrow_drop_down
                      </span>
                    </a>
        </div>
          </div>
          <div className={style.imgHome}></div>
        </div>


      </div>

      <div id='1' className={style.cont}>
        <div className={style.gridHome}>
              <div className={style.imgSobrenosotros}>
              </div>
                <div className={style.textHome}>
                  <div className={style.title}>
                    <h1>Nuestro</h1>
                    <h1>Objetivo</h1>
                  </div>
                  <div className={style.aboutus}>
                  <p>En este sector queremos armar una comunidad de mujeres Unit para mostrar y destacar
                    los talentos.  Es un lugar en donde deseamos que se generen lazos y se compartan 
                    experiencias.</p>
                  </div>
                  <a className={style.dropdown} href='#2'>
                  <button className={style.botonHome}>Testimonios</button>
                  </a>
                  <div className={style.arrow}>
                    <a className={style.dropdown} href='#2'>
                      <span className="material-icons">
                        arrow_drop_down
                      </span>
                    </a>
                  </div>
                </div>
        </div>
      </div>

      <div id='2' className={style.cont1}>
      <div className={style.gridHome}>
                <div className={style.textHome}>
                  <h1>Testimonios</h1>
                  <div className={style.contdevs}>
                      <TextMobileStepper/>
                  </div>
                  <a className={style.dropdown} href='#0'>
                    <button className={style.botonHome}>Subir 🡱</button>
                  </a>
                  <div className={style.arrow}>
                    <a className={style.dropdown} href='#3'>
                      {/* <span className="material-icons">
                        arrow_drop_down
                      </span> */}
                    </a>
                  </div>
                </div>
              <div className={style.imgdevs}>
              </div>
        </div>
      </div>

      {/* <div id='3' className={style.cont}>
        <h1>Section 4</h1>
        <div className={style.arrow}>
                    <a className={style.dropdown} href='#0'>
                      <span className="material-icons">
                        arrow_drop_down
                      </span>
                    </a>
        </div>
      </div>  */}

    </div>

  )
}