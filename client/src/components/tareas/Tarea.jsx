import React, { useContext } from 'react'
import TareaContext from '../../context/tareas/TareaContext'
import ProyectoContext from '../../context/proyectos/ProyectoContext'

const Tarea = ({tarea}) => {
    
    const tareasContext = useContext(TareaContext)
    const { 
        eliminarTarea, 
        obtenerTareas, 
        actualizarTarea,
        tareaActual
    } = tareasContext

    const proyectosContext = useContext(ProyectoContext)
    const { proyecto } = proyectosContext
    const [ proyectoActual ] = proyecto 

    // Funcion para eliminar una tareas
    const tareaEliminar = id =>{
        eliminarTarea(id, proyectoActual._id)
        obtenerTareas(proyectoActual._id)
    }

    const cambiarEstado = tarea =>{        
        tarea.estado = (tarea.estado)? false : true 
        actualizarTarea(tarea)
    }

    const selecionarTarea = tarea =>{
        tareaActual(tarea)
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {
                    tarea.estado
                    ?(
                        <button 
                            type="button" 
                            className="completo"
                            onClick={()=>cambiarEstado(tarea)}
                        >
                            Completo
                        </button>
                    ) 
                    :(
                        <button 
                            type="button" 
                            className="incompleto"
                            onClick={()=>cambiarEstado(tarea)}
                        >
                            Incompleto
                        </button>
                    ) 
                }
            </div>
            <div className="acciones">
                <button 
                    className="btn btn-primario"    
                    onClick={()=>selecionarTarea(tarea)}                
                >
                        Editar
                </button>
                <button 
                    className="btn btn-secundario"
                    onClick={()=>tareaEliminar(tarea._id)}>
                        Eliminar
                </button>
            </div>
        </li>
    )
}

export default Tarea
