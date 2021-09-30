import React, {useReducer} from 'react'
import AuthReduce from './AuthReduce'
import AuthContext from './AuthContext'
import clienteAxios from '../../config/axios'
import tokenAuth from '../../config/token'

import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
//     LOGIN_EXITOSO,
    LOGIN_ERROR,
//     CERRAR_SESSION,
} from '../../types'

const AuthState = props =>{
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null 
    }
    const [state, dispatch] = useReducer(AuthReduce, initialState)
    // Funciones

    const registrarUsuario = async datos =>{
        try {
            const registrarUsuario = await clienteAxios.post('api/usuarios', datos)
            dispatch({
                type: REGISTRO_EXITOSO,
                payload : registrarUsuario
            })
            // Obtener el usuario            
            usuarioAutenticado()
        } catch (error) {
            const alerta = {
                msg: error.response.data.msg,
                categoria : 'alert-error'
            }            
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    // Retorna usuario autenticado
    const usuarioAutenticado = async () => { 
        const token = localStorage.getItem('token')   
        if(token) {
            //Difine las cabeceras con la configuracion
            tokenAuth(token)
        }
        try {
            const respuesta = await clienteAxios.get('/api/auth')
            // console.log('Este es el usuario', respuesta);   
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            })       
        } catch (error) {
            console.log(error);
            dispatch({
                type: LOGIN_ERROR
            })
        }

    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado : state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario,
                usuarioAutenticado
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState