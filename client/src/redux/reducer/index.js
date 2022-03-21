import { 
    GET_ALL_CANDIDATES, 
    GET_USER, GET_FAVORITES, 
    LOGOUT, 
    LOADING, 
    CAMBIAR_LOGEO, 
    FILTRO_BUSCADOS,
    FILTRO_FAVORITES, 
    GET_FOLDERS, 
    DELETE_FAVORITE,
    GET_FOLDER_FAVORITES
 } from '../actions/index'

const inicialState = { 
    candidates: [], 
    usuario: [], 
    favorites: [], 
    carpetas: [], 
    loading: {loading: false, msg:""}, 
    mostrar:[], 
    mostrarf: [],
    logeado: false, 
    eliminado: [],
    archivos: [], 
};

const rootReducer = (state = inicialState, action) => {
    switch (action.type) {

        case GET_ALL_CANDIDATES:
            return {
                ...state,
                candidates: action.payload,
                mostrar: action.payload
            }
           
        case GET_USER:
            return {
                ...state,
                usuario: action.payload,
                logeado: true
            }    
      
        case GET_FAVORITES: 
        return {
            ...state,
            favorites: action.payload,
            loading: {loading: false, msg: ""},
            mostrarf: action.payload
        }

        case GET_FOLDERS:
            return {
                ...state,
                carpetas: action.payload
            }

        case LOGOUT: 
        return {
            ...state,
            usuario: [],
            logeado: false
        }

        case LOADING:
            return {
                ...state,
                loading: {
                  loading: true,
                  msg: action.payload
                },
              }
        case CAMBIAR_LOGEO:
            return {
                ...state,
                usuario: action.payload,
                logeado: true
            }
            
        case FILTRO_BUSCADOS:
            return {
                ...state,
                mostrar: action.payload
            }
        case FILTRO_FAVORITES:
            return {
                ...state,
                mostrarf: action.payload
            }    
        case DELETE_FAVORITE:
            return {
                ...state,
                eliminado: action.payload
            }
        case GET_FOLDER_FAVORITES:
            return {
                ...state,
                archivos: action.payload
            } 

        default:
        return state

    }
}

export default rootReducer;