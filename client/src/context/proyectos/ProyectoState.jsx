import React,{useReducer} from "react"
import ProyectoContext from "./ProyectoContext"
import ProyectoReduce from "./ProyectoReduce"
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from "../../types"


const ProyectoState = props => {

    
    const proyectos = [
        { id: 1, nombre: 'tienda virtual'},
        { id: 2, nombre: 'intranet'},
        { id: 3, nombre: 'Diseño X'}
    ] 

    const initialState = {
        formulario : false,
        proyectos : []
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

    return(
        <ProyectoContext.Provider
            value = {{
                proyectos: state.proyectos,
                formulario : state.formulario,
                mostrarFormulario,
                obtenerProyectos
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState