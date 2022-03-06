import React, { useState, useEffect } from "react";
import "./FavCart.css";
import data from "./dataprueba.json"



const FavCart = ()=>{
    const [busca, setBusca] = useState("");
   
    return (
        <div>
            <input type="text"
            placeholder="Filtrar candidatos"
            class="buscador"            
            onChange={(e)=>{setBusca(e.target.value)}}
            />
        <table>
        <thead>            
            <tr>                    
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Mail</th>
                <th>Ubicacion</th>
                <th>Idiomas</th>
                <th>Tecnologias</th>
                <th>Hab blandas</th>
                <th>LinkedIn</th>
                <th>Github</th>
                <th>Portfolio</th>
                <th>Status</th>
                <th>Cv</th>
                <th>Contactar</th>
                <th>Estado contacto</th>
            </tr>
        </thead>
        <tbody>                
            {data.filter(val=>{
                if(busca===""){
                    return val;
                }else if(val.nombre.toLocaleLowerCase().includes(busca.toLocaleLowerCase())||
                val.apellido.toLocaleLowerCase().includes(busca.toLocaleLowerCase())||
                val.ubicacion.toLocaleLowerCase().includes(busca.toLocaleLowerCase())||
                val.idiomas.toLocaleLowerCase().includes(busca.toLocaleLowerCase())                
                ){
                    return val
                }
            }).map((candidato)=>(               
                <tr key={candidato.id}>
                    <td>{candidato.nombre}</td>
                    <td>{candidato.apellido}</td>
                    <td>{candidato.mail}</td>
                    <td>{candidato.ubicacion}</td>
                    <td>{candidato.idiomas}</td>
                    <td>{candidato.tecnologias.map(e=><spam>{e} </spam>)}</td>
                    <td>{candidato[("hab blanads")].map(e=><spam>{e} </spam>)}</td>
                    <td>{candidato.linkedin}</td>
                    <td>{candidato.github}</td>
                    <td>{candidato.portfolio}</td>
                    <td className={`status ${candidato.status}`}>{candidato.status}</td>
                    <td>{candidato.cv}</td>
                    <td>{candidato.contactar}</td>
                    <td class={`estado contacto ${candidato["estado contacto"]}`}>{candidato["estado contacto"]}</td>                        
                </tr> 
            ))
            }            
        </tbody>
    </table>
    </div>
    )             
}
export default FavCart