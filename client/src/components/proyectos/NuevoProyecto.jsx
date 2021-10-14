import React, { Fragment, useState, useContext } from 'react'
import ProyectoContext from '../../context/proyectos/ProyectoContext'

const NuevoProyecto = () => {
    const proyectosContext = useContext(ProyectoContext)
    // Desctrturacion de informacion
    const { 
        formulario, 
        errorformulario, 
        mostrarFormulario, 
        agregarProyecto, 
        mostrarError  
    } = proyectosContext


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
        //  validar proyecto
        if(nombre === '') {
            mostrarError()
            return 
        }
        
        // Agregar proyecto
        agregarProyecto(proyecto)
        // Limpiar el formulario
        setProyecto({nombre:''})
        
    }
    return (

        <Fragment>
            <button 
                type="button"
                className="btn btn-block btn-primario"
                onClick={()=>mostrarFormulario()}
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
                            autocomplete="off"
                            value={nombre}/>
                        <input 
                            type="submit" 
                            value="Agregar Proyecto" 
                            className="btn btn-primario btn-block"/>
                    </form>
                ): null 
            }

            {
                errorformulario
                ? <p className="mensaje error">El nombre es obligatorio</p>
                : null
            }
        </Fragment>

    )
}

export default NuevoProyecto
