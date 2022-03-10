import React, { useState, useEffect } from "react";
import "./FavCart.css";
import { useSelector, useDispatch } from "react-redux";
import { getFavorites } from "../../redux/actions";
import { Link } from 'react-router-dom'


const FavCart = ()=>{
    const [busca, setBusca] = useState("");
    const favorites = useSelector(state => state.favorites)
    const usuario = useSelector(state => state.usuario)
    const dispatch = useDispatch()
    console.log(favorites)
    useEffect(() => {
    if (favorites.length===0){
        dispatch(getFavorites(usuario.id));
    }
    }, [favorites])
   
    return (
        <div>
            <input type="text"
            placeholder="Filtrar candidatos"
            class="buscador"            
            onChange={(e)=>{setBusca(e.target.value)}}
            />
            <div>
                <Link to='/favorites'>
                <button>Home</button>
                </Link>
            </div>
        <table>
        <thead>            
            <tr>                    
                <th>name</th>
                <th>lastname</th>
                <th>email</th>
                <th>location</th>
                <th>languages</th>
                <th>technicalskills</th>
                <th>Hab softskills</th>
                <th>LinkedIn</th>
                <th>Github</th>
                <th>Portfolio</th>
                <th>Status</th>
                <th>Cv</th>
                <th>Contactar</th>
                <th>Estado contacteds</th>
            </tr>
        </thead>
        <tbody>                
            {favorites?.candidates?.filter(val=>{
                if(busca===""){
                    return val;
                }else if(val?.name?.toLocaleLowerCase().includes(busca.toLocaleLowerCase())||
                val?.lastname?.toLocaleLowerCase().includes(busca.toLocaleLowerCase())||
                val?.location?.toLocaleLowerCase().includes(busca.toLocaleLowerCase())||
                val?.languages?.find(e=>e.toLocaleLowerCase().includes(busca.toLocaleLowerCase()))||
                val?.technicalskills?.find(e=>e.toLocaleLowerCase().includes(busca.toLocaleLowerCase()))||
                val?.softskills?.find(e=>e.toLocaleLowerCase().includes(busca.toLocaleLowerCase()))||
                val?.status?.toLocaleLowerCase().includes(busca.toLocaleLowerCase())||
                val?.contacteds?.find(e=>e.toLocaleLowerCase().includes(busca.toLocaleLowerCase()))
                ){
                    return val
                }
            }).map((candidato)=>(               
                <tr key={candidato.id}>
                    <td>{candidato.name}</td>
                    <td>{candidato.lastname}</td>
                    <td>{candidato.email}</td>
                    <td>{candidato.location}</td>
                    <td>{candidato.languages}</td>
                    <td>{candidato.technicalskills.map(e=><li >{e}</li>)}</td>
                    <td>{candidato.softskills.map(e=><li>{e}</li>)}</td>
                    <td>{candidato.linkedin}</td>
                    <td>{candidato.github}</td>
                    <td>{candidato.portfolio}</td>
                    <td className={`status ${candidato.status}`}>{candidato.status}</td>
                    <td>{candidato.cv}</td>
                    <td>{candidato.contactar}</td>
                    <td class={`contacteds ${candidato.contacteds}`}>{candidato.contacteds}</td>                        
                </tr> 
            )
            )
            }    
        </tbody>
    </table>
    </div>
    )             
}
export default FavCart