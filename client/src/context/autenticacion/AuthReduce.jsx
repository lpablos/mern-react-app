import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    // OBTENER_USUARIO,
    // LOGIN_EXITOSO,
    // LOGIN_ERROR,
    // CERRAR_SESSION,
} from '../../types'

export default (state, action) => {
    switch (action.type) {
        case REGISTRO_EXITOSO:
            localStorage.setItem('token', action.payload.data.token)
            return{
                ...state,
                autenticado: true, 
                mensaje: null
            }
            break;
        case REGISTRO_ERROR:
            return{
                ...state,
                token: null,
                mensaje : action.payload
            }
            break;
        // case OBTENER_USUARIO:
        //     break;
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