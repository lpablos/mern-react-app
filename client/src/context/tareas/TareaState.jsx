import React, {useReducer} from 'react'
import TareaContext from './TareaContext'
import TareaReduce from './TareaReduce'
import { v4 as uuidv4 } from 'uuid';
import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from "../../types"

const TareaState = props =>{
    
   
    const initialState = {
        // tareas : [
        //     {
        //         id:1,
        //         nombre: 'Elegir Plataforma',
        //         estado: true,
        //         proyectoId: 1
        //     },
        //     {
        //         id:2,
        //         nombre: 'Elegir Colores',
        //         estado: false,
        //         proyectoId: 2
        //     },
        //     {
        //         id:3,
        //         nombre: 'Elegir Plataformas de Pago',
        //         estado: true,
        //         proyectoId: 3
        //     },
        //     {
        //         id:4,
        //         nombre: 'Elegir Hosting',
        //         estado: false,
        //         proyectoId: 4
        //     },
        //     {
        //         id:5,
        //         nombre: 'Elegir Colores',
        //         estado: false,
        //         proyectoId: 2
        //     },
        //     {
        //         id:6,
        //         nombre: 'Elegir Plataformas de Pago',
        //         estado: true,
        //         proyectoId: 2
        //     },
        //     {
        //         id:7,
        //         nombre: 'Elegir Hosting',
        //         estado: false,
        //         proyectoId: 1
        //     },
        //     {
        //         id:8,
        //         nombre: 'Elegir Colores',
        //         estado: false,
        //         proyectoId: 2
        //     },
        //     {
        //         id:9,
        //         nombre: 'Elegir Plataformas de Pago',
        //         estado: true,
        //         proyectoId: 3
        //     },
        //     {
        //         id:10,
        //         nombre: 'Elegir Hosting',
        //         estado: false,
        //         proyectoId: 4
        //     },
        // ],
        tareas : [],
        tareasproyecto: null,
        errorTarea: false,
        tareaselecionada: null
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
    // Agrega un tarea
    const agregarTarea = tarea =>{
        tarea.id = uuidv4() 
        dispatch({
            type : AGREGAR_TAREA,
            payload : tarea
        })
    }

    // Valida y muestra error
    const validaTarea = () =>{
        dispatch({
            type: VALIDAR_TAREA          
        })
    } 

    // Eliminar una tarea
    const eliminarTarea = idTarea =>{
        dispatch({
            type: ELIMINAR_TAREA,
            payload: idTarea
        })
    }

    // cambiar estado tarea

    const cambiarEstadoTarea = tarea =>{
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    // Estrae una tarea para edicion
    const tareaActual = tarea =>{
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    // Editar o ctualizar tare

    const actualizarTarea = tarea =>{
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }
    // Eliminar la tarea selecionada
    const limpiarTarea = tarea =>{
        dispatch({
            type: LIMPIAR_TAREA
        })
    }



    return (
        <TareaContext.Provider
            value = {{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errorTarea : state.errorTarea,
                tareaselecionada:state.tareaselecionada,
                obtenerTareas,
                agregarTarea,
                validaTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                tareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState
