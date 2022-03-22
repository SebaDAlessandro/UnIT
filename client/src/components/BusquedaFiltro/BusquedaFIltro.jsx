import React, { useState } from "react";
import Style from "./BusquedaFiltro.module.css";

export default function BusquedaFiltro() {
    const tec = [
        {
            name:'React'
        },
        {
            name:'Angular'
        },
        {
            name:'Vue'
        },
        {
            name:'Node'
        },
    ]

    const idi = [
        {
            name:'Ingles'
        },
        {
            name:'Aleman'
        },
        {
            name:'Portugues'
        },
        {
            name:'Frances'
        },
    ]
   
    const soft = [
        {
            name:'lindo'
        },
        {
            name:'alegre'
        },
        {
            name:'audaz'
        },
        {
            name:'creativo'
        },
        {
            name:'aasdasd'
        },
        {
            name:'asdasd'
        },
        {
            name:'asadsd'
        },
        {
            name:'kjbkjasd'
        },
        {
            name:'dfgdfgd'
        },
        {
            name:'dfgdfgg'
        },
        {
            name:'dfgdfg'
        },
        {
            name:'dfgdfgdf'
        },
        {
            name:'dfgdfgdf'
        },
        {
            name:'werwref'
        },
    ]




    
    const [idiomas, setIdiomas] = useState([]);
    const [tecnologias, setTecnologias] = useState([]);
    const [softkills, setSoftkills] = useState([]);

    function abrirModal(id) {
        document.getElementById(id).classList.toggle(`${Style.mostrarModal}`);
    }

    function agregarSeleccion(name, state){
        document.getElementById(`${name}`).classList.toggle(`${Style.seleccionado}`);
        if (state === 'idiomas') {
            idiomas.indexOf(name) === -1 ? setIdiomas([...idiomas, name]) : setIdiomas(idiomas.filter(i => i !== name));
        }
        if (state === 'tecnologias') {
            tecnologias.indexOf(name) === -1 ? setTecnologias([...tecnologias, name]) : setTecnologias(tecnologias.filter(i => i !== name));
        }
        if (state === 'softkills') {
            softkills.indexOf(name) === -1 ? setSoftkills([...softkills, name]) : setSoftkills(softkills.filter(i => i !== name));
        }

    }
    function limpiarEstados(){
        setIdiomas([]);
        setTecnologias([]);
        setSoftkills([]);

    }

    return (
        <div className={Style.contenedorGeneral}>
            <div className={Style.gridFiltros}>
                <div className={Style.contenidoFiltros}>
                    <h1 className={Style.titulo}>Explora y Conecta</h1>
                    <div className={Style.contInput}>
                        <input type="text" className={Style.inputGeneral} placeholder="Ingrese un nombre o caracteristica" />
                        <button className={Style.botonBuscar}><span class="material-icons-outlined">Search</span></button>
                    </div>
                    <div className={Style.contSelec}>
                        <h3>Filtros</h3>

                        <select name="Ubicacion" className={Style.select} id="">
                            <option value="value1">Ubicaciones</option>
                        </select>

                        <select name="Seniority" className={Style.select} >
                            <option value="value1">Seniority</option>
                        </select>
                    </div>
                    <div className={Style.contenedorBotones}>
                

                        <div className={Style.botonesModal} onClick={() => { abrirModal("tecnologias") }}>
                            {tecnologias.length === 0 ?
                            <div>
                            <span className={`material-icons-outlined ${Style.iconoAgregar}`}>
                                add_circle_outline
                            </span>
                            <h4>Agregar Tecnologías</h4>
                            </div>
                            :
                            tecnologias.map(e =>
                                
                                    <span className={Style.etiquetasMostrar}>{e}</span>
                                
                            )
                            }
                        </div>
                        <div className={Style.modal} id="tecnologias">
                            <button onClick={()=>{abrirModal('tecnologias')}} className={Style.cerrarModal}>x</button>
                            <div className={Style.contEtiquetas}> 
                                {tec.map(e=> (
                                    <span id={e.name} onClick={()=>agregarSeleccion(e.name, 'tecnologias')} className={Style.etiquetas}>{e.name}</span>
                                ))

                                }
                            </div>
                        </div>
                        
                        <div className={Style.botonesModal} onClick={() => { abrirModal("idiomas") }}>
                        {idiomas.length === 0 ?
                            <div>
                            <span className={`material-icons-outlined ${Style.iconoAgregar}`}>
                                add_circle_outline
                            </span>
                            <h4>Agregar Idiomas</h4>
                            </div>
                            :
                            idiomas.map(e =>
                                
                                    <span className={Style.etiquetasMostrar}>{e}</span>
                                
                            )
                            }
                        </div>
                        <div className={Style.modal} id="idiomas">
                            <button onClick={()=>{abrirModal('idiomas')}} className={Style.cerrarModal}>x</button>
                            <div className={Style.contEtiquetas}> 
                                {idi.map(e=> (
                                    <span id={e.name} onClick={()=>agregarSeleccion(e.name, 'idiomas')} className={Style.etiquetas}>{e.name}</span>
                                ))

                                }
                            </div>
                        </div>
                        <div className={Style.botonesModal} onClick={() => { abrirModal("soft") }}>
                        {softkills.length === 0 ?
                            <div>
                            <span className={`material-icons-outlined ${Style.iconoAgregar}`}>
                                add_circle_outline
                            </span>
                            <h4>Agregar SoftSkills</h4>
                            </div>
                            :
                            softkills.map(e =>
                                
                                    <span className={Style.etiquetasMostrar}>{e}</span>
                                
                            )
                            }
                        </div>
                        <div className={Style.modal} id="soft">
                        <button onClick={()=>{abrirModal('soft')}} className={Style.cerrarModal}>x</button>
                            <div className={Style.contEtiquetas}> 
                                {soft.map(e=> (
                                    <span id={e.name} onClick={()=>agregarSeleccion(e.name, 'softkills')} className={Style.etiquetas}>{e.name}</span>
                                ))

                                }
                            </div>
                        </div>

                    </div>
                    <div className={Style.contBotonesEnviar}>
                        <button className={Style.botonEnviar}>Buscar</button>
                        <button onClick={limpiarEstados} className={Style.botonLimpiar}><span class="material-icons-outlined">
                            delete
                        </span></button>
                    </div>
                </div>
                <div className={Style.imgFiltros}>

                </div>

            </div>
        </div>

    )
}



