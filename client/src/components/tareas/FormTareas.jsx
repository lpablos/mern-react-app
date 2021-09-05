import React, {useContext} from 'react'
import ProyectoContext from '../../context/proyectos/ProyectoContext'

const FormTareas = () => {
    const proyectosContext = useContext(ProyectoContext)
    const {proyecto} = proyectosContext
    // Si no exite un proyecto que no pinte el formulario
    if(!proyecto) return null

    const [proyectoActual] = proyecto

    return (
        <div className="formulario">
            <form action="">
                <div className="contenedor-input">
                    <input 
                        type="text" 
                        className="input-text"
                        placeholder="Nombre tarea... "
                        name="nombre" 
                        id="" />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit" 
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                        />
                </div>
            </form>
        </div>
    )
}

export default FormTareas
