import React, {useContext, useEffect} from 'react'
import Proyecto from './Proyecto'
import ProyectoContext from '../../context/proyectos/ProyectoContext'

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
            { proyectos.map( proyecto =>(
                <Proyecto
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}           
        </ul>
    )
}

export default Listado
