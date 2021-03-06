import {
    TAREAS_PROYECTO, 
    AGREGAR_TAREA, 
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    // ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types'
// eslint-disable-next-line
export default (state, action)=>{
    switch(action.type){
        case TAREAS_PROYECTO: 
            return {
                ...state,                
                tareasproyecto : action.payload
            }
        case AGREGAR_TAREA:
            return {
                ...state,
                tareasproyecto: [action.payload,...state.tareasproyecto],
                errorTarea: false
            }
        case VALIDAR_TAREA:
            return {
                ...state,
                errorTarea: true
            }
        case ELIMINAR_TAREA:
            return {
                ...state,
                tareasproyecto : state.tareasproyecto.filter(tarea => tarea._id !== action.payload)
            }
            // case ESTADO_TAREA:
        case ACTUALIZAR_TAREA:
            return {
                ...state,
                tareasproyecto : state.tareasproyecto.map(tarea => tarea._id === action.payload._id ? action.payload : tarea),
                // tareaselecionada: null
            }
        case TAREA_ACTUAL:
            return {
                ...state,
                tareaselecionada : action.payload
            }
        case LIMPIAR_TAREA:
            return {
                ...state,
                tareaselecionada : null
            }
        default:
            return state
    }
}