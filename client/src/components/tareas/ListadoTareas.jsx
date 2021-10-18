import React, { Fragment, useContext } from 'react'
import Tarea from './Tarea'
import ProyectoContext from '../../context/proyectos/ProyectoContext'
import TareaContext from '../../context/tareas/TareaContext'
// Animacion
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoTareas = () => {
    
    const proyectosContext = useContext(ProyectoContext)
    const {proyecto, eliminarProyecto } = proyectosContext

    const tareasContext = useContext(TareaContext)
    const {tareasproyecto} = tareasContext
    // Si no existe un proyecto selecionado manda este aviso
    if(!proyecto) return <h2>Seleciona un proyecto</h2>

    
    // De lo contrario continua  con el despliege de la seccion
    const [proyectoActual] = proyecto

    
    
    const onClickEliminar = () =>{
        
        eliminarProyecto(proyectoActual._id)
        
    }
    return (
        <Fragment>
            <h2>Proyectos : {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {
                    tareasproyecto.length === 0 
                    ?(<li className="tarea"><p>No hay tareas</p></li>)
                    :
                    <TransitionGroup>
                    {tareasproyecto.map(tarea => (
                     
                        <CSSTransition
                            key={tarea._id}
                            timeout={200}
                            classNames="tarea"
                        >
                            
                            <Tarea 
                                key={tarea._id}
                                tarea={tarea}
                            />
                        </CSSTransition>
                    ))}
                    </TransitionGroup>
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
