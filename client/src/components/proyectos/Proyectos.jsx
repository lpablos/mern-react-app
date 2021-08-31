import React from 'react'
import Siderbar from '../layout/Siderbar'
import Barra from '../layout/Barra'
import FormTareas from '../tareas/FormTareas'
import ListadoTareas from '../tareas/ListadoTareas'

const Proyectos = () => {
    return (
        <div className="contenedor-app">
            <Siderbar/>
            <div className="seccion-principal">
                <Barra/>
                <main>
                    <FormTareas/>
                    <div className="contenedor-tareas">
                        <ListadoTareas/>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Proyectos
