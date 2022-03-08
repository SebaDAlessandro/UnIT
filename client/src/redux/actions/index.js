import axios from 'axios'

export const GET_FAVORITES = 'GET_FAVORITES'
export const GET_ALL_CANDIDATES = 'GET_ALL_CANDIDATES'
export const GET_USER = 'GET_USER'
export const ADD_FAVORITE = 'ADD_FAVORITE'
export const GET_FAVORITES = 'GET_FAVORITES'

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

export function addFavorite (payload) {   
    console.log("Id ususarios", payload);    
    return async (dispatch) => {     
        try {var json = await axios.post('http://localhost:3001/favorites', payload);        
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

        export function getFavorite (id) {   
            /* console.log("Id ususarios");  */   
            return async (dispatch) => {     
                try {var json = await axios.get(`http://localhost:3001/favorites/${id}`);        
                    console.log("Datos para posteo", json.data);   
                   console.log(json.data)      
                    return dispatch({         
                        type: GET_FAVORITES,         
                        payload: json.data,       
                    });     
                } 
                    catch (error) {      
                        return dispatch({         
                            type: GET_FAVORITES,         
                            payload: "No se pudo cargar los favoritos",      
                        });     
                    }  
                 }; 
                }        

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

export const Login = (create) => async dispatch => {

    console.log(create)

    const res = await axios.post(`http://localhost:3001/cuentarecruiter/loginrecruiter`, create)
    
    console.log(res.data)
    
    return dispatch ({
        type: GET_USER,
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

export const getFavorites = (id) => async dispatch => {
    let json = await axios.get(`http://localhost:3001/favorites/${id}`)
    dispatch({
        type: GET_FAVORITES,
        payload: json.data
    })

    console.log(json.data)
}