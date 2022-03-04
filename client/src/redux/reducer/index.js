import { GET_ALL_CANDIDATES, GET_USER } from '../actions/index'
const inicialState = { candidates: [], usuario: [] };

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
      
        default:
        return state

    }
}

export default rootReducer;