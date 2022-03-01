import { GET_ALL_CANDIDATES } from '../actions/index'
const inicialState = { candidates: [] };

const rootReducer = (state = inicialState, action) => {
    switch (action.type) {

        case GET_ALL_CANDIDATES:
            return {
                ...state,
                candidates: action.payload
            }
      
        default:
        return state

    }
}

export default rootReducer;