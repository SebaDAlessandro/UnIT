import axios from 'axios'

export const GET_FAVORITES = 'GET_FAVORITES'
export const GET_ALL_CANDIDATES = 'GET_ALL_CANDIDATES'
export const GET_USER = 'GET_USER'
export const ADD_FAVORITE = 'ADD_FAVORITE'
export const LOGOUT = 'LOGOUT'
export const LOADING = 'LOADING'
export const CAMBIAR_LOGEO = 'CAMBIAR_LOGEO'
export const FILTRO_BUSCADOS = 'FILTRO_BUSCADOS'
export const CREATE_FOLDER = 'CREATE_FOLDER'
export const GET_FOLDERS = 'GET_FOLDERS'
export const DELETE_FAVORITE = 'DELETE_FAVORITE'
export const GET_FOLDER_FAVORITES = 'GET_FOLDER_FAVORITES'
export const ADD_CANDIDATE = 'ADD_CANDIDATE'
export const DELETE_FOLDER = 'DELETE_FOLDER'
export const FILTRO_FAVORITES = 'FILTRO_FAVORITES'
export const GET_CANDIDATE = 'GET_CANDIDATE'

//PARA FILTROS

export const GET_GENEROS = 'GET_GENEROS'
export const GET_IDIOMAS = 'GET_IDIOMAS'
export const GET_SENIORITY = 'GET_SENIORITY'
export const GET_LOCATIONS = 'GET_LOCATIONS'
export const GET_SOFT = 'GET_SOFT'
export const GET_TECH = 'GET_TECH'
export const FILTERS_TOTAL = 'FILTERS_TOTAL'


export const CreateCandidate = (create) => async () => {

    console.log(create)

    const res = await axios.post(`/candidates/`, create)

    console.log(res.data)

}

export function getCandidate(id) {
    console.log("Id candidato");
    return async function (dispatch) {
        dispatch({ type: LOADING, payload: 'Buscando candidato...' })
        var json = await axios.get(`/candidates/${id}`)
        return dispatch({
            type: GET_CANDIDATE,
            payload: json.data,
        });
    }
}

export const CreateRecluiter = (create) => async () => {

    console.log(create)

    const res = await axios.post(`/cuentarecruiter`, create)

    console.log(res.data)

}

export function addFavorite(payload) {
    console.log("Id ususarios", payload);
    return async (dispatch) => {
        try {
            var json = await axios.post('/favorites', payload);
            /*   console.log("Datos para posteo", json.data);  */
            return dispatch({
                type: ADD_FAVORITE,
                payload: json.data,
            });
        }
        catch (error) {
            return dispatch({
                type: ADD_FAVORITE,
                payload: "No se pudo agregar el candidato",
            });
        }
    };
}

export const deleteFavorite = (recruiterId) => async dispatch => {

    console.log(recruiterId, "Favorito por eliminar")

    const res = await axios.post(`/favorites/candidate/`, recruiterId)

    console.log(res.data, "Esto es el Res")

    return dispatch({
        type: DELETE_FAVORITE,
        payload: res.data
    })

}

export function getFavorites(id) {
    console.log("Id ususarios");
    return async function (dispatch) {
        dispatch({ type: LOADING, payload: 'Buscando Favoritos...' })
        var json = await axios.get(`/favorites/${id}`)
        return dispatch({
            type: GET_FAVORITES,
            payload: json.data,
        });
    }
}

export function getFolders(id) {
    /* console.log("Id ususarios");  */
    return async function (dispatch) {
        dispatch({ type: LOADING, payload: 'Buscando Carpetas...' })
        var json = await axios.get(`/folders/recruiter/${id}`)
        return dispatch({
            type: GET_FOLDERS,
            payload: json.data,
        });
    }
}

export function getFolderFavorites(id) {
    /* console.log("Id ususarios");  */
    return async function (dispatch) {
        dispatch({ type: LOADING, payload: 'Buscando Favoritos de la carpeta...' })
        var json = await axios.get(`/folders/${id}`)
        return dispatch({
            type: GET_FOLDER_FAVORITES,
            payload: json.data,
        });
    }
}


export const deleteFolder = (idFolder) => async dispatch => {

    console.log(idFolder, "Este es el id de la carpeta para eliminar")

    const res = await axios.post(`/folders/delete`, idFolder)

    return dispatch({
        type: DELETE_FOLDER,
        payload: res.data
    })

}

export const addCandidateToFolder = ({ fId, cId }) => async dispatch => {

    console.log(fId, cId, "Estos son los Ids para la ruta")

    const res = await axios.post(`/folders/${fId}/candidate/${cId}`, fId, cId)

    return dispatch({
        type: ADD_CANDIDATE,
        payload: res.data
    })

}

export const Login = (create) => async dispatch => {

    console.log(create)

    const res = await axios.post(`/cuentarecruiter/loginrecruiter`, create)

    /*  console.log(res.data.token, "Este es el token") */

    localStorage.setItem('id', JSON.stringify(res.data));

    return dispatch({
        type: GET_USER,
        payload: res.data
    })

}

export const createFolder = (create) => async dispatch => {

    console.log(create, "Carpeta por crear")

    const res = await axios.post(`/folders`, create)

    return dispatch({
        type: CREATE_FOLDER,
        payload: res.data
    })

}

export const getAllCandidates = () => async dispatch => {
    let json = await axios.get('/candidates')
    dispatch({
        type: GET_ALL_CANDIDATES,
        payload: json.data
    })

    console.log(json.data)
}

export const logout = () => async dispatch => {

    localStorage.removeItem('id');

    dispatch({
        type: LOGOUT,
        payload: "cerrar sesion"
    })
}

export const cambiarlogeo = (info) => async dispatch => {

    dispatch({
        type: CAMBIAR_LOGEO,
        payload: info
    })
}

export const filtrarBuscados = (info) => async dispatch => {

    dispatch({
        type: FILTRO_BUSCADOS,
        payload: info
    })
}



/// GET PARA FILTROSS


export const filtersTotal = (payload) => async dispatch => {
    console.log(payload, "Esto es el filto total")
    let json = await axios.post('/filters/total',payload)
    dispatch({
        type: FILTERS_TOTAL,
        payload: json.data
    })

    console.log(json.data)
}

export const getIdiomas = () => async dispatch => {
    try{
    let json = await axios.get('/language')
    dispatch({
        type: GET_IDIOMAS,
        payload: json.data
    })}
    catch(error){
        console.log(error)
    }
}

export const getLocations = () => async dispatch => {
    try {
        let json = await axios.get('/location')
        dispatch({
            type: GET_LOCATIONS,
            payload: json.data
        })
    } catch (error) {
        console.log(error)
    }
}


export const getGeneros = () => async dispatch => {
    try {
        let json = await axios.get('/gender')
        dispatch({
            type: GET_GENEROS,
            payload: json.data
        })
    } catch (error) {
        console.log(error)
    }


}
export const getSoft = () => async dispatch => {
    try {
        let json = await axios.get('/softskill')
        dispatch({
            type: GET_SOFT,
            payload: json.data
        })
    } catch (error) {
        console.log(error)
    }
}





export const getTech = () => async dispatch => {
    try {
    let json = await axios.get('/technicalskill')
    dispatch({
        type: GET_TECH,
        payload: json.data
    })
    } catch (error) {
        console.log(error)
    }

}
export const getSeniority = () => async dispatch => {
    try {
    let json = await axios.get('/senority')
    dispatch({
        type: GET_SENIORITY,
        payload: json.data
    })
    } catch (error) {
        console.log(error)
    }
}





