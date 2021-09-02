import React, { Fragment, useState, useContext } from 'react'
import ProyectoContext from '../../context/proyectos/ProyectoContext'

const NuevoProyecto = () => {
    const proyectosContext = useContext(ProyectoContext)
    const { formulario } = proyectosContext


    const [proyecto, setProyecto] = useState({
        nombre:''
    })

    const {nombre} = proyecto

    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }
    const onSubmit = e =>{
        e.preventDefault();
        alert("Nuevo proyecto")
    }
    return (

        <Fragment>
            <button 
                type="button"
                className="btn btn-block btn-primario"
            >
                Nuevo Proyecto
            </button>

            {
                formulario
                ?(
                    <form 
                        onSubmit={onSubmit}
                        className="formulario-nuevo-proyecto">
                        <input 
                            type="text" 
                            name="nombre" 
                            id="" 
                            className="input-text"
                            placeholder="Nombre del Proyecto"
                            onChange={onChangeProyecto}
                            value={nombre}/>
                        <input 
                            type="submit" 
                            value="Agregar Proyecto" 
                            className="btn btn-primario btn-block"/>
                    </form>
                ): null 
            }
        </Fragment>

    )
}

export default NuevoProyecto
