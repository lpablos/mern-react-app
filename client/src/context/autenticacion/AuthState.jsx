import React, {useReducer} from 'react'
import AuthReduce from './AuthReduce'
import AuthContext from './AuthContext'
import clienteAxios from '../../config/axios'
import tokenAuth from '../../config/token'

import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
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
            // Registrar usuario
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
        // 1.- Obtenemos por storage 
        const token = localStorage.getItem('token')   
        if(token) {
            // 2.- Llamada a la configuracion de headers para que axios lo asocie
            tokenAuth(token)
        }
        try {
            // 3.- Hace la peticion con los headers ya configurados 
            const respuesta = await clienteAxios.get('/api/auth')
            // console.log('Este es el usuario', respuesta);   
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            })       
        } catch (error) {
            // console.log(error.response);
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response
            })
        }

    }

    // Cuando el usuario inica session
    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos)
            console.log("Esta es al respuesta", respuesta);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta                
            })
            // Obtener el usuario una vez teniendo el token
            usuarioAutenticado()
        } catch (error) {
            console.log("Error", error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria : 'alert-error'
            }            
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
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
                usuarioAutenticado,
                iniciarSesion
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState