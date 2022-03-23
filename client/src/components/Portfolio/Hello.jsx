import React from 'react'
import style from '../Portfolio/Portfolio.module.css'
import axios from "axios";
import { useSelector } from 'react-redux';

export const Hello = () => {

    function download() {
        axios({
              url: 'https://drive.google.com/file/d/1X810HrFzOp_0zYaQ4lKt9N4BYz9Y64GI/view?usp=drivesdk',
              method: 'GET',
              responseType: 'blob'
        })
              .then((response) => {
                    const url = window.URL
                    .createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'cv.pdf');
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
              })
  }

  const usuario = useSelector(state => state.usuario)
  const candidato = useSelector( state => state.candidato)
  console.log(candidato)

  return (
    <div id='hello' className={style.contHello}>
        <div className={style.titleHello}>
            <div>
                <h1>¡Hola, soy {candidato.name}!</h1>
            </div>
            <div>
            <button className={style.download}>Descargar CV</button>
            <a href="#sobremi">
                <button className={style.aboutme}>Sobre mi</button>
            </a>
            </div>
        </div>
        <div className={style.picture}>
            <img src={usuario.image} alt='Not Found' />
        </div>
    </div>
  )
}

export default Hello
