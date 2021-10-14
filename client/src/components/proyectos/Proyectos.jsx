import React, {useContext, useEffect} from 'react'
import Siderbar from '../layout/Siderbar'
import Barra from '../layout/Barra'
import FormTareas from '../tareas/FormTareas'
import ListadoTareas from '../tareas/ListadoTareas'
import AuthContext from '../../context/autenticacion/AuthContext'

const Proyectos = () => {
    const authContext = useContext(AuthContext)
    const {usuarioAutenticado} = authContext

    useEffect(() => {
        usuarioAutenticado()        
    }, [])

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
