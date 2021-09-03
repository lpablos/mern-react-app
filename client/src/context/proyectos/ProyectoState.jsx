import React,{useReducer} from "react"
import ProyectoContext from "./ProyectoContext"
import ProyectoReduce from "./ProyectoReduce"
import { v4 as uuidv4 } from 'uuid';
import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL
} from "../../types"


const ProyectoState = props => {

    
    const proyectos = [
        { id: 1, nombre: 'tienda virtual'},
        { id: 2, nombre: 'intranet'},
        { id: 3, nombre: 'Diseño X'}
    ] 
    // variables globales
    const initialState = {
        formulario : false,
        proyectos : [],
        errorformulario: false,
        proyecto: null
    }

    // dispache para ejecutaras las acciones
    const [state, dispatch] = useReducer(ProyectoReduce,initialState)
    
    // Serie de funciones para el CRUD

    const mostrarFormulario = () =>{
        dispatch({type : FORMULARIO_PROYECTO})
    }

    // Obtener los proyectos
    const obtenerProyectos = () =>{        
        dispatch({
            type: OBTENER_PROYECTOS,
            payload : proyectos
        })
    }

    // agregar proyecto

    const agregarProyecto = proyecto =>{
        proyecto.id = uuidv4() 
        dispatch({
            type: AGREGAR_PROYECTO,
            payload : proyecto
        })
    }

    // Valida el formulario por errores
    const mostrarError = () =>{
        dispatch({
            type: VALIDAR_FORMULARIO,
        })
    }

    // seleccionar el proyecto al hacer click
    const proyectoACtual = proyectoId =>{        
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })

    }

    return(
        <ProyectoContext.Provider
            value = {{
                proyectos: state.proyectos,
                formulario : state.formulario,
                errorformulario : state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoACtual
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState