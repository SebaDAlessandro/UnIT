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

export const CreateCandidate = (create) => async () => {

    console.log(create)

    const res = await axios.post(`http://localhost:3001/candidates/`, create)

    console.log(res.data)

}

export const CreateRecluiter = (create) => async () => {

    console.log(create)

    const res = await axios.post(`http://localhost:3001/cuentarecruiter`, create)

    console.log(res.data)

}

export function addFavorite(payload) {
    console.log("Id ususarios", payload);
    return async (dispatch) => {
        try {
            var json = await axios.post('http://localhost:3001/favorites', payload);
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


export function getFavorites (id) {   
    console.log("Id ususarios");  
    return async function (dispatch) {
        dispatch({ type: LOADING, payload: 'Buscando Favoritos...' }) 
        var json = await axios.get(`http://localhost:3001/favorites/${id}`)
        return dispatch({         
            type: GET_FAVORITES,         
            payload: json.data,       
        });   
    }  }

    export function getFolders (id) {   
        /* console.log("Id ususarios");  */ 
        return async function (dispatch) {
            dispatch({ type: LOADING, payload: 'Buscando Carpetas...' }) 
            var json = await axios.get(`http://localhost:3001/folders/recruiter/${id}`)
            return dispatch({         
                type: GET_FOLDERS,
                payload: json.data,      
            });   
        }  }
    
/*     export function getFolders(id) {
        console.log("Obtener carpetas", id);
        return async (dispatch) => {
            try {
                var json = await axios.post(`http://localhost:3001/folders/recruiter/${id}`);
               
                return dispatch({
                    type: GET_FOLDERS,
                    payload: json.data,
                });
            }
            catch (error) {
                return dispatch({
                    type: GET_FOLDERS,
                    payload: "No se pudo obtener las carpetas",
                });
            }
        };
    } */
    
export const Login = (create) => async dispatch => {

    console.log(create)

    const res = await axios.post(`http://localhost:3001/cuentarecruiter/loginrecruiter`, create)

   /*  console.log(res.data.token, "Este es el token") */
   
    localStorage.setItem('id', JSON.stringify(res.data));
    
    return dispatch({
        type: GET_USER,
        payload: res.data
    })
    
    
}

export const createFolder = (create) => async dispatch => {
    
    console.log(create, "Carpeta por crear")
    
    const res = await axios.post(`http://localhost:3001/folders`, create)
    
    return dispatch({
        type: CREATE_FOLDER,
        payload: res.data
    })


}

export const getAllCandidates = () => async dispatch => {
    let json = await axios.get('http://localhost:3001/candidates')
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


    /* export function getFavorites (id) {   
         console.log("Id ususarios");  
        return function (dispatch) {
        dispatch({ type: LOADING, payload: 'Buscando Favoritos...' }) 
        return ( {     
                try {var json = await axios.get(`http://localhost:3001/favorites/${id}`);        
                    console.log("Datos para posteo", json.data);   
                console.log(json.data)      
                    return dispatch({         
                        type: GET_FAVORITES,         
                        payload: json.data,       
                    });     
    
                catch (error) {      
                    return dispatch({         
                        type: GET_FAVORITES,         
                        payload: "No se pudo cargar los favoritos",      
                    });     
                    }  
                
                })
            }
        }}  */
    
             
    
    /* Mejor formad e hacer las rutas
    
    export function loginUser(payload) {   
        console.log("datos enviados para ac", payload);    
        return async (dispatch) => {     
            try {var json = await axios.post(/login/loginUser, payload);        
                console.log("Datos para posteo", json.data);        
                return dispatch({         
                    type: LOGIN_USER,         
                    payload: json.data,       
                });     
            } 
                catch (error) {      
                    return dispatch({         
                        type: LOGIN_USER,         
                        payload: "400",       
                    });     
                }  
             }; 
            } */