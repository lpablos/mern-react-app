import React, {useReducer} from 'react'
import TareaContext from './TareaContext'
import TareaReduce from './TareaReduce'
import { 
    TAREAS_PROYECTO
} from "../../types"

const TareaState = props =>{
    
   
    const initialState = {
        tareas : [
            {
                nombre: 'Elegir Plataforma',
                estado: true,
                proyectoId: 1
            },
            {
                nombre: 'Elegir Colores',
                estado: false,
                proyectoId: 2
            },
            {
                nombre: 'Elegir Plataformas de Pago',
                estado: true,
                proyectoId: 3
            },
            {
                nombre: 'Elegir Hosting',
                estado: false,
                proyectoId: 4
            },
            {
                nombre: 'Elegir Colores',
                estado: false,
                proyectoId: 2
            },
            {
                nombre: 'Elegir Plataformas de Pago',
                estado: true,
                proyectoId: 2
            },
            {
                nombre: 'Elegir Hosting',
                estado: false,
                proyectoId: 1
            },
            {
                nombre: 'Elegir Colores',
                estado: false,
                proyectoId: 2
            },
            {
                nombre: 'Elegir Plataformas de Pago',
                estado: true,
                proyectoId: 3
            },
            {
                nombre: 'Elegir Hosting',
                estado: false,
                proyectoId: 4
            },
        ],
        tareasproyecto: null
    }

    const [state, dispatch] = useReducer(TareaReduce, initialState)

    // Aqui se crearan las funciones

    // Obtener las tareas de un proyecto

    const obtenerTareas = proyectoId =>{
        
        dispatch({
            type : TAREAS_PROYECTO,
            payload : proyectoId
        })
    }

    return (
        <TareaContext.Provider
            value = {{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                obtenerTareas
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState
