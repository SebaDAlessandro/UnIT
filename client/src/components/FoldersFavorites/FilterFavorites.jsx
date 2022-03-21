import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCandidates, filtrarBuscados, getFavorites, filtrarFavorites } from "../../redux/actions";



const FilterFavorites = ()=>{
    const [busqueda, setBusqueda] = useState("");
    const todos = useSelector(state=> state.favorites.candidates);
    console.log(todos, "todos")
    /* const candidatos = useSelector (state => state.candidatos); */
    const usuario = useSelector(state => state.usuario)
    const dispatch = useDispatch();

    useEffect(()=>{
        if (!todos){
         /*    dispatch(getAllCandidates(candidatos.id)) */
            dispatch(getFavorites(usuario.id));
        }
    }, [todos]);

    useEffect(()=>{
        if(busqueda!==""){
            filtro(todos, busqueda)
        }else {dispatch(filtrarFavorites(todos)) }
        }, [busqueda])

    const filtro = (todos, busqueda)=>{
        var filter = todos?.filter(val=>{
            if(busqueda===""){
                return val
            }else if(
            val?.name?.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())||
            val?.lastname?.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())||
            val?.location?.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())||
            val?.languages?.find(e=>e.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()))||
            val?.technicalskills?.find(e=>e.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()))||
            val?.softskills?.find(e=>e.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()))||
            val?.status?.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())||
            val?.contacteds?.find(e=>e.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()))
            )return val
        })
        dispatch(filtrarFavorites(filter))
        console.log(filter)
    }

    return(
        <div>
            <input type="text"
            placeholder="Busca candidatos"
            class="busqueda"            
            onChange={(e)=>{setBusqueda(e.target.value)}}
            />
            <div>
            {/* .map((candidato)=>(             
            //     <div key={candidato.id}>
            //         <h1>{candidato.name}</h1>
            //     </div>
            //))             */}
            </div>
        </div>
    )
}

export default FilterFavorites