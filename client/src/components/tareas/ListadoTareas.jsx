import React, { Fragment, useContext } from 'react'
import Tarea from './Tarea'
import ProyectoContext from '../../context/proyectos/ProyectoContext'

const ListadoTareas = () => {
    
    const proyectosContext = useContext(ProyectoContext)
    const {proyecto, eliminarProyecto } = proyectosContext
    // Si no existe un proyecto selecionado manda este aviso
    if(!proyecto) return <h2>Seleciona un proyecto</h2>

    
    // De lo contrario continua  con el despliege de la seccion
    const [proyectoActual] = proyecto

    const tareasProyecto = [
        {
            nombre: 'Elegir Plataforma',
            estado: true
        },
        {
            nombre: 'Elegir Colores',
            estado: false
        },
        {
            nombre: 'Elegir Plataformas de Pago',
            estado: true
        },
        {
            nombre: 'Elegir Hosting',
            estado: false
        },
    ]

    const onClickEliminar = () =>{
        eliminarProyecto(proyectoActual.id)
    }
    return (
        <Fragment>
            <h2>Proyectos : {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {
                    tareasProyecto.length === 0 
                    ?(<li className="tarea"><p>No hay tareas</p></li>)
                    :tareasProyecto.map(tarea=>(
                        <Tarea 
                            tarea={tarea}
                        />
                    ))
                }
            </ul>
            <button 
                type="button" 
                className="btn btn-eliminar sombra"
                onClick={()=>onClickEliminar()}
                >
                    Eliminar Proyecto
            </button>

        </Fragment>
    )
}

export default ListadoTareas
