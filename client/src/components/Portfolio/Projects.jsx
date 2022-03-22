import React from 'react'
import style from './Portfolio.module.css'
import proyecto from '../images/proyecto.jpg'

export const Projects = () => {
  return (
    <div id='proyectos' className={style.contPorjects}>
            <h1>Proyectos</h1>
        <div className={style.projectGlobal}>
            <div className={style.contp}>
                <h2>My Chat App</h2>
                <div className={style.miniatura}>
                    <img src={proyecto} alt='Not Found'/>
                </div>
                <div className={style.des}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis distinctio suscipit quod, harum repellat impedit quas. Molestias, ea aliquam? Cumque voluptatum tenetur nisi nam perspiciatis similique minima perferendis ab illum!</p>
                </div>
                <button>Ver más</button>
            </div>

            <div className={style.contp}>
                <h2>My Chat App</h2>
                <div className={style.miniatura}>
                    <img src={proyecto} alt='Not Found'/>
                </div>
                <div className={style.des}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis distinctio suscipit quod, harum repellat impedit quas. Molestias, ea aliquam? Cumque voluptatum tenetur nisi nam perspiciatis similique minima perferendis ab illum!</p>
                </div>
                <button>Ver más</button>
            </div>

            <div className={style.contp}>
                <h2>My Chat App</h2>
                <div className={style.miniatura}>
                    <img src={proyecto} alt='Not Found'/>
                </div>
                <div className={style.des}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis distinctio suscipit quod, harum repellat impedit quas. Molestias, ea aliquam? Cumque voluptatum tenetur nisi nam perspiciatis similique minima perferendis ab illum!</p>
                </div>
                <button>Ver mas</button>
            </div>

            <div className={style.contp}>
                <h2>My Chat App</h2>
                <div className={style.miniatura}>
                    <img src={proyecto} alt='Not Found'/>
                </div>
                <div className={style.des}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis distinctio suscipit quod, harum repellat impedit quas. Molestias, ea aliquam? Cumque voluptatum tenetur nisi nam perspiciatis similique minima perferendis ab illum!</p>
                </div>
                <button>Ver más</button>
            </div>
      
        </div>
    </div>
  )
}

export default Projects
