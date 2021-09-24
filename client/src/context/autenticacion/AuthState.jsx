import React, {useReducer} from 'react'
import AuthReduce from './AuthReduce'
import AuthContext from './AuthContext'
// import {
//     REGISTRO_EXITOSO,
//     REGISTRO_ERROR,
//     OBTENER_USUARIO,
//     LOGIN_EXITOSO,
//     LOGIN_ERROR,
//     CERRAR_SESSION,
// } from '../../types'

const AuthState = props =>{
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null 
    }
    const [state, dispatch] = useReducer(AuthReduce, initialState)
    // Funciones


    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado : state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState