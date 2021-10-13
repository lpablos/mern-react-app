import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESSION,
} from '../../types'

export default (state, action) => {
    switch (action.type) {
        case LOGIN_EXITOSO:
        case REGISTRO_EXITOSO:
            localStorage.setItem('token', action.payload.data.token)
            return{
                ...state,
                autenticado: true, 
                mensaje: null,
                cargando: false
            }
            
        case CERRAR_SESSION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                usuario: null,
                autenticado: null,
                mensaje : action.payload,
                cargando: false
            }
            
        case OBTENER_USUARIO:
            return{
                ...state,
                autenticado: true,
                usuario: action.payload
            }
            
        // case LOGIN_EXITOSO:
        //     break;
        // case LOGIN_ERROR:
        //     break;
        // case CERRAR_SESSION:
        //     break;
        default:
            break;
    }

}