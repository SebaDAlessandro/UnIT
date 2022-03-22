import React from 'react'
import style from '../About/About.module.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'  
import 'animate.css';

export default function Slider() {
  return (
    <div className={style.contGlobal}>
      
      <div id='0' className={style.home}>
        <div className={style.gridHome}>
          <div className={style.textHome}>
          <Link to='/'>
      <p>Home</p>
      </Link>
          <div className={style.logo}><img src={logo} alt='Not Found' /></div>
            <h1>Encuentra tu </h1>
            <h1>Talento ideal</h1>
            <div>
              <a href='#1' className={style.botonHome}>Nuestro Propósito</a>
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
                    <h1>Proposito</h1>
                  </div>
                  <div className={style.aboutus}>
                  <p>Queremos lograr que las empresas tengan un acceso simple 
                    a los talentos del mundo IT, por medio de un algoritmo super complejo 
                    que les permitirá hacer match con el candidato que deseen</p>
                  </div>
                  <a className={style.dropdown} href='#2'>
                  <button className={style.botonHome}>Nuestro propósito</button>
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
                  <h1>Devs UnIT</h1>
                  <div className={style.contdevs}>
                    <div className={style.devs}></div>
                    <div className={style.devs}></div>
                    <div className={style.devs}></div>
                    <div className={style.devs}></div>
                    <div className={style.devs}></div>
                    <div className={style.devs}></div>
                    <div className={style.devs}></div>
                    <div className={style.devs}></div>
                    <div className={style.devs}></div>
                    <div className={style.devs}></div>
                    <div className={style.devs}></div>
                    <div className={style.devs}></div>
                    <div className={style.devs}></div>
                    <div className={style.devs}></div>
                    <div className={style.devs}></div>
                  </div>
                  <a className={style.dropdown} href='#3'>
                    <button className={style.botonHome}>Siguiente</button>
                  </a>
                  <div className={style.arrow}>
                    <a className={style.dropdown} href='#3'>
                      <span className="material-icons">
                        arrow_drop_down
                      </span>
                    </a>
                  </div>
                </div>
              <div className={style.imgdevs}>
              </div>
        </div>
      </div>

      <div id='3' className={style.cont}>
        <h1>Section 4</h1>
        <div className={style.arrow}>
                    <a className={style.dropdown} href='#0'>
                      <span className="material-icons">
                        arrow_drop_down
                      </span>
                    </a>
        </div>
      </div>

    </div>

  )
}