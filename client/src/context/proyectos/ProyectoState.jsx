import React,{useReducer} from "react"
import ProyectoContext from "./ProyectoContext"
import ProyectoReduce from "./ProyectoReduce"
// import { v4 as uuidv4 } from 'uuid';
import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO, 
    PROYECTO_ERROR
} from "../../types"

import clienteAxios from '../../config/axios'


const ProyectoState = props => {

    
    // const proyectos = [
    //     { id: 1, nombre: 'tienda virtual'},
    //     { id: 2, nombre: 'intranet'},
    //     { id: 3, nombre: 'Diseño X'}
    // ] 
    // variables globales
    const initialState = {
        formulario : false,
        proyectos : [],
        errorformulario: false,
        proyecto: null, 
        mensaje: null
    }

    // dispache para ejecutaras las acciones
    const [state, dispatch] = useReducer(ProyectoReduce,initialState)
    
    // Serie de funciones para el CRUD

    const mostrarFormulario = () =>{
        dispatch({type : FORMULARIO_PROYECTO})
    }

    // Obtener los proyectos
    const obtenerProyectos = async () =>{        
        // dispatch({
        //     type: OBTENER_PROYECTOS,
        //     payload : proyectos
        // })
        // alert("Obten proyectos")
        
        const resultados = await clienteAxios.get('/api/proyectos')
        
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: resultados.data.proyectos
        })
        try {
            
        } catch (error) {
            console.log("Este es el error", error);
        }
    }

    // agregar proyecto

    const agregarProyecto = async proyecto =>{
        // proyecto.id = uuidv4() 
        // dispatch({
        //     type: AGREGAR_PROYECTO,
        //     payload : proyecto
        // })
        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto)            
            dispatch({
                type: AGREGAR_PROYECTO,
                payload : resultado.data
            })
        } catch (error) {
            
        }
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

    const eliminarProyecto = async proyectoId =>{   
         
        try {
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`)
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            })  
        } catch (error) {
            
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }

    // Eliminar un proyecto

    return(
        <ProyectoContext.Provider
            value = {{
                proyectos: state.proyectos,
                formulario : state.formulario,
                errorformulario : state.errorformulario,
                proyecto: state.proyecto,
                mensaje: state.mensaje,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoACtual,
                eliminarProyecto
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState