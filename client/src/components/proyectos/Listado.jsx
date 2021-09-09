import React, {useContext, useEffect} from 'react'
import Proyecto from './Proyecto'
import ProyectoContext from '../../context/proyectos/ProyectoContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Listado = () => {
    const proyectosContext = useContext(ProyectoContext)
    const {proyectos, obtenerProyectos} = proyectosContext

    useEffect(() => {        
        obtenerProyectos()
    }, [])

    // Verificacion en caso existir listado
    if(proyectos.length === 0) return <p>No existen proyectos, crea uno</p>

    return (
        <ul className="listado-proyectos"> 
            <TransitionGroup>
                { proyectos.map( proyecto =>(                      
                    <CSSTransition
                        key={proyecto.id}
                        timeout= {300}
                        classNames="proyecto"
                    >
                        <Proyecto
                            key={proyecto.id}
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                
                ))}           
            </TransitionGroup>
        </ul>
    )
}

export default Listado
