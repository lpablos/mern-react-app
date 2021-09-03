import React, { useContext } from 'react'
import ProyectoContext from '../../context/proyectos/ProyectoContext'

const Proyecto = ({proyecto}) => {
    const proyectosContext = useContext(ProyectoContext)
    const {proyectoACtual} = proyectosContext
    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={()=>proyectoACtual(proyecto.id)}
            >
                {proyecto.nombre}
            </button>
        </li>
    )
}

export default Proyecto
