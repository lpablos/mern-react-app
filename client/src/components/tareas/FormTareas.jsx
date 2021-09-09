import React, {useContext, useState} from 'react'
import ProyectoContext from '../../context/proyectos/ProyectoContext'
import TareaContext from '../../context/tareas/TareaContext'

const FormTareas = () => {
    const proyectosContext = useContext(ProyectoContext)
    const {proyecto} = proyectosContext

    const tareasContext = useContext(TareaContext)
    const { agregarTarea, validaTarea, errorTarea, obtenerTareas } = tareasContext

    const [tarea, setTarea] = useState({
        nombre : ''
    })
    // Si no exite un proyecto que no pinte el formulario
    if(!proyecto) return null
    // objecto del proyecto actual
    const [proyectoActual] = proyecto

    

    const {nombre} = tarea

    const handleChange = e =>{
        setTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        // Validar
        if( nombre.trim() === '' ) {
            validaTarea()
            return
        }
        // Pasar la nueva tarea
        tarea.proyectoId = proyectoActual.id
        tarea.estado = true
        agregarTarea(tarea)
        // Actualizar el listado de las tareas del proyecto actual
        // Nota: es posible por que el evento depende del state 
        // aun que no se parte del mismo componente
        obtenerTareas(proyectoActual.id)
        // Reiniciar el form
        setTarea({nombre: ''})


    }

    return (
        <div className="formulario">
            <form 
                onSubmit = { onSubmit }
                >
                <div className="contenedor-input">
                    <input 
                        type="text" 
                        className="input-text"
                        placeholder="Nombre tarea... "
                        name="nombre" 
                        onChange = {handleChange}
                        value={nombre}  
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
            { 
                errorTarea
                ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> 
                : null 
            }
        </div>
    )
}

export default FormTareas
