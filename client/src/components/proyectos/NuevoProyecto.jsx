import React, { Fragment, useState } from 'react'

const NuevoProyecto = () => {
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
        </Fragment>

    )
}

export default NuevoProyecto
