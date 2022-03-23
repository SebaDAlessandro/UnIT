import React, { useState } from "react";
import Style from "./BusquedaFiltro.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGeneros, getSoft, getTech, getSeniority , getLocations, getIdiomas } from "../../redux/actions";
export default function BusquedaFiltro() {



    const generos = useSelector(state => state.generos);
    const softState = useSelector(state => state.soft);
    const tech = useSelector(state => state.tech);
    const seniority = useSelector(state => state.seniority);
    const locations = useSelector(state => state.locations);
    const idiomasState = useSelector(state => state.idiomas);

    const dispatch = useDispatch();

    useEffect(() => {
        if (generos.length === 0) {
            dispatch(getGeneros());
        }
        if (softState.length === 0) {
            dispatch(getSoft());
        }
        if (tech.length === 0) {
            dispatch(getTech());
        }
        if (seniority.length === 0) {
            dispatch(getSeniority());
        }
        if (locations.length === 0) {
            dispatch(getLocations());
        }
        if (idiomasState.length === 0) {
            dispatch(getIdiomas());
        }
    }, [idiomasState, generos, softState, tech, seniority, locations]);
    
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
                        <button className={Style.botonBuscar}><span class="material-icons-outlined">search</span></button>
                    </div>
                    <div className={Style.contSelec}>
                        <h3>Filtros</h3>

                        <select name="Ubicacion" className={Style.select} id="">
                            <option value="value1">Ubicaciones</option>
                            {locations.map(l => (
                                <option value={l.id}>{l.location}</option>
                            ))}

                        </select>

                        <select name="Seniority" className={Style.select} >
                            <option defaultChecked value="">Seniority</option>
                            {seniority.map(s => (
                                <option value={s.id}>{s.senority}</option>
                            ))}
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
                                {tech?.map(e=> (
                                    <span id={e.technicalskills} onClick={()=>agregarSeleccion(e.technicalskills, 'tecnologias')} className={Style.etiquetas}>{e.technicalskills}</span>
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
                                {idiomasState?.map(e=> (
                                    <span id={e.language} onClick={()=>agregarSeleccion(e.language, 'idiomas')} className={Style.etiquetas}>{e.language}</span>
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
                                {softState?.map(e=> (
                                    <span id={e.soft_skill} onClick={()=>agregarSeleccion(e.soft_skill, 'softkills')} className={Style.etiquetas}>{e.soft_skill}</span>
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



