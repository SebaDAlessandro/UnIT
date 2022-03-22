import React from 'react'
import style from '../Portfolio/Portfolio.module.css'
import libro from '../images/libro.png'
import maleta from '../images/maleta.png'

const SobreMi = () => {
  return (
    <div id='sobremi' className={style.contSobreMi}>
        <div className={style.titleAbout}>
            <h1>Sobre mi</h1>
        </div>

        <div className={style.contInfo}>
            <div>
                <img src={libro} alt='NotFound' height={450}/>
            </div>
            <div className={style.contIntro}>
                <h2>Intro</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat deserunt rerum impedit ea rem, consequatur tenetur eaque ratione a reprehenderit deleniti. Nobis est minus voluptatum dicta, ipsum velit repellat suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odit facilis laboriosam culpa provident beatae tenetur. Aut velit, cupiditate minima, nisi accusamus impedit quaerat rem debitis, sunt quam maxime voluptates!</p>
                <button>Contacto</button>
            </div>
            <div className={style.contIntro}>
                <h2>Educación</h2>
                <div className={style.contEducación}>
                    <div className={style.cajas}>
                        <img src={maleta} alt='Not Found'/>
                        <h3>Secundaria</h3>
                        <p></p>
                    </div>
                    <div className={style.cajas}>
                        <img src={maleta} alt='Not Found'/>
                        <h3>Universitaria</h3>
                        <p></p>
                    </div>
                    <div className={style.cajas}>
                        <img src={maleta} alt='Not Found'/>
                        <h3>Full Stack</h3>
                        <p></p>
                    </div>
                    <div className={style.cajas}>
                        <img src={maleta} alt='Not Found'/>
                        <h3>Cursos Web</h3>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SobreMi
