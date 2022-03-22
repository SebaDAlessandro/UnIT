import React, { useState } from "react";
import Style from '../Portfolio/Portfolio.module.css'

export default function Habilidades() {
    const [seleccion, setSeleccion] = useState('tecnicas');
    function botones(id) {
        setSeleccion(id)
    }

    return (
        <div id='habilidades' className={Style.contenedorGralHabilidades}>
            <h1>Mis Habilidades</h1>

            <div className={Style.cuadro}>
                <div className={Style.contBotones}>
                    <h3 className={`${seleccion !== 'tecnicas' ? Style.botonHab : Style.botonActivo}`} onClick={()=>botones('tecnicas')}>Tecnicas</h3>
                    <h3 className={`${seleccion !== 'soft' ? Style.botonHab : Style.botonActivo}`} id="soft" onClick={()=>botones('soft')}>SoftKills</h3>
                </div>

                <div className={Style.gridHabilidades}>
                    <div className={Style.imgHabilidades}>

                    </div>
                    <div className={Style.contenidoHbilidades}>
                        {seleccion === 'tecnicas'?
                        <div>
                        <h2>Técnicas</h2>
                        <div className={Style.contenedorEtiquetas}>
                            <span className={Style.etiquetasMostrar}>react</span>
                            <span className={Style.etiquetasMostrar}>Angular</span>
                            <span className={Style.etiquetasMostrar}>Javascript</span>
                            <span className={Style.etiquetasMostrar}>PHP</span>
                            <span className={Style.etiquetasMostrar}>MySql</span>
                            <span className={Style.etiquetasMostrar}>MySql</span>
                            <span className={Style.etiquetasMostrar}>MySql</span>
                        </div>
                        </div>
                        :
                        <div>
                        <h2>Soft</h2>
                        <div className={Style.contenedorEtiquetas}>
                            <span className={Style.etiquetasMostrar}>react</span>
                            <span className={Style.etiquetasMostrar}>Angular</span>
                            <span className={Style.etiquetasMostrar}>Javascript</span>
                            <span className={Style.etiquetasMostrar}>PHP</span>
                            <span className={Style.etiquetasMostrar}>MySql</span>
                            <span className={Style.etiquetasMostrar}>MySql</span>
                            <span className={Style.etiquetasMostrar}>MySql</span>
                        </div> 
                        </div>

                        }
                    </div>
                </div>

            </div>
        </div>
    )

}