import { GET_ALL_CANDIDATES, GET_USER, GET_FAVORITES } from '../actions/index'
const inicialState = { candidates: [], usuario: [], favorites: [] };

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
                usuario: action.payload
            }    
      
        case GET_FAVORITES: 
        return {
            ...state,
            favorites: action.payload
        }

        default:
        return state

    }
}

export default rootReducer;