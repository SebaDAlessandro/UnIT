import React from "react";
import style from './Profile.module.css'
import Skills from "./Skills";
import portada from '../images/portada.jpg'

export default function Profile (){
    return (
        <div>

            <div className={style.porta}>
               <img src = {portada} className={style.img} />
            </div>

            <div>
               <h3 className={style.title}>Mi Perfil</h3>
            </div>

            <div>
                  <div>
                      <img src="" ></img>
                  </div>
                  <div>
                      <h3>Luis Lescano</h3>
                      <h4>Junior UI/UX Design</h4>
                  </div>
                  <div>
                      <i class='bx bx-map'><h4>Figura, Malta</h4></i>
                      <i className='bx bx-search-alt-2'><h4>Seeking: No Data</h4></i>
                      <i class='bx bx-calendar'><h4>2022-02-03</h4></i>
                  </div>
                  <div>
                      <button>Editar Perfil</button>
                      <button>Ver Portafolio</button>
                  </div>
            </div>

            <div>
            <div><h4>Informacion Personal</h4></div>
                <div>
                    <h3>Nombre:</h3>
                    <h3>Apellido:</h3>
                </div>

            <div><h4>Sobre Mi</h4></div>
                <div>
                    <h3>Descripcion</h3>
                </div>

            <div><h4>Contacto</h4></div>
                <div>
                    <div>
                    <h3>Email:</h3>
                    </div>
                    <div>
                    <h3>Numero:</h3>
                    </div>
                    <div>
                    <h3>LinkedIn:</h3>
                    </div>
                    <div>
                    <h3>Github:</h3>
                    </div>
                </div>

            <div><h4>Seguridad</h4></div>
                <div>
                    <h3>Cambiar contraseña:</h3>
                </div>
            </div>
            <Skills/>
        </div>
    )
}