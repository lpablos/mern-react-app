import React from 'react'
import NuevoProyecto from '../proyectos/NuevoProyecto'
import Listado from '../proyectos/Listado'

const Siderbar = () => {
    return (
        <aside>
            <h1>MERN <span>Taks</span></h1>
            <NuevoProyecto />
            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                <Listado/>
            </div>
        </aside>
    )
}

export default Siderbar
