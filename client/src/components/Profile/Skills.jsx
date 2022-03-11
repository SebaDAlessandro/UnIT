import React from "react";
import style from './Skills.module.css'

export default function Skills (){
    return (
        <div>
            <h3>Mis Habilidades</h3>
                <div className="Tecnicas">
                    <button>Tecnicas</button>
                    <span>Javascript</span>
                    <span>React</span>
                    <span>Css</span>
                    <span>Java</span>
                    <span>PHP</span>
                    <span>Python</span>
                    <span>HTML</span>
                    <span>Redux</span>
                    <span>Node</span>
                    
                    <div>
                        <button>Editar Habilidades</button>
                    </div>
                </div>
                <div className="Blandas">
                    <button>Blandas</button>
                    <span>Paciente</span>
                    <span>Empatíc@</span>
                    <span>Puntual</span>
                    <span>Respetuos@</span>
                    <span>Compañer@</span>
                    <span>Analista</span>
                    <span>Autodidacta</span>
                    <span>Atent@</span>
                    <span>Adaptabilidad</span>
                    
                    <div>
                        <button>Editar Habilidades</button>
                    </div>
                </div>

     
                <div className="work">
                    
                </div>
        </div>
    )
}