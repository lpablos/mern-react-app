import React,{ useReducer } from 'react'
import AlertaContext from "./AlertaContext"
import AlertaReduce from './AlertaReduce'
import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../../types'

const AlertaState = props =>{
    const initialState = {
        alerta : null
    }
    const [state, dispatch] = useReducer(AlertaReduce, initialState)

    // Funciones
    // Mostrar alertas
    const mostrarAlertas = (msg, categoria)=>{
        console.log('Entro en la funcion State');
        dispatch({
            type: MOSTRAR_ALERTA,
            payload : {
                msg,
                categoria
            }
        })
        // Despues de 5 minutos limpiar la alerta
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA,
            })
        }, 5000);
    }
    return(
        <AlertaContext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlertas
            }}
        >
            {props.children}
        </AlertaContext.Provider>
    )
}

export default AlertaState