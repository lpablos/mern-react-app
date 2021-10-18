import React, {useContext, useState, useEffect} from 'react'
import ProyectoContext from '../../context/proyectos/ProyectoContext'
import TareaContext from '../../context/tareas/TareaContext'

const FormTareas = () => {
    const proyectosContext = useContext(ProyectoContext)
    const {proyecto} = proyectosContext

    const tareasContext = useContext(TareaContext)
    const { 
        tareaselecionada, 
        errorTarea,
        agregarTarea, 
        validaTarea,  
        obtenerTareas,
        actualizarTarea,
        limpiarTarea 
    } = tareasContext

    const [tarea, setTarea] = useState({
        nombre : ''
    })

     // Decta si hay una tarea selecionada
     useEffect(() => {
        (tareaselecionada !== null )
            ?setTarea(tareaselecionada)
            :setTarea({nombre:''})
        
    }, [tareaselecionada])
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

        // Verificar si es edicion o nueva tarea
        if(tareaselecionada === null){
            // Pasar la nueva tarea
            tarea.proyecto = proyectoActual._id
            // tarea.estado = true
            agregarTarea(tarea)
        }else{
            // actualizar tarea
            actualizarTarea(tarea)
            limpiarTarea()            
        }
        
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
                        value={
                            tareaselecionada 
                                ?"Editar Tarea" 
                                :"Agregar Tarea"
                        }
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
