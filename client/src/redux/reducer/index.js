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
    GET_FOLDER_FAVORITES,
    GET_GENEROS,
    GET_IDIOMAS,
    GET_SENIORITY,
    GET_SOFT,
    GET_TECH,
    GET_LOCATIONS,
    GET_CANDIDATE,
    FILTERS_TOTAL,
    GET_NIVEL
} from '../actions/index';

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
    candidato: [],
    archivos: [], 
    niveles: [],
    
    locations: [],
    soft: [],
    tech: [],
    seniority: [],
    generos: [],
    idiomas: [],
    filtrados: []
    
};

const rootReducer = (state = inicialState, action) => {
    switch (action.type) {

        case GET_NIVEL:
            return {
                ...state,
                niveles: action.payload
            }

        case GET_CANDIDATE:
            return {
                ...state,
                candidato: action.payload
            }

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
        
        case GET_GENEROS:
            return {
                ...state,
                generos: action.payload
            }
        case GET_IDIOMAS:
            return {
                ...state,
                idiomas: action.payload
            }
        case GET_SENIORITY:
            return {
                ...state,
                seniority: action.payload
            }
        case GET_SOFT:
            return {
                ...state,
                soft: action.payload
            }
        case GET_TECH:
            return {
                ...state,
                tech: action.payload
            }
        case GET_LOCATIONS:
            return {
                ...state,
                locations: action.payload
            }
        case FILTERS_TOTAL:
            return {
                ...state,
                filtrados: action.payload.candidates
            }


        default:
        return state

    }
}

export default rootReducer;