import { GET_ALL_CANDIDATES, GET_USER, GET_FAVORITES, LOGOUT, LOADING, CAMBIAR_LOGEO } from '../actions/index'
const inicialState = { candidates: [], usuario: [], favorites: [], loading: {loading: false, msg:""}, logeado: false };

const rootReducer = (state = inicialState, action) => {
    switch (action.type) {

        case GET_ALL_CANDIDATES:
            return {
                ...state,
                candidates: action.payload
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
            loading: {loading: false, msg: ""}
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

        default:
        return state

    }
}

export default rootReducer;