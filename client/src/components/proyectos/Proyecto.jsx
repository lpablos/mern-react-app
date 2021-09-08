import React, { useContext } from 'react'
import ProyectoContext from '../../context/proyectos/ProyectoContext'
import TareaContext from '../../context/tareas/TareaContext'


const Proyecto = ({proyecto}) => {
    const proyectosContext = useContext(ProyectoContext)
    const {proyectoACtual} = proyectosContext

    const TareasContext = useContext(TareaContext)
    const {obtenerTareas} = TareasContext

    // funcion para fijar un proyecto actual
    const selecionarProyecto = id =>{
        proyectoACtual(id) // Fijar un proyecto actual
        obtenerTareas(id)
    }
    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={()=>selecionarProyecto(proyecto.id)}
            >
                {proyecto.nombre}
            </button>
        </li>
    )
}

export default Proyecto
