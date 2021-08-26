import React from 'react'
import NuevoProyecto from '../proyectos/NuevoProyecto'

const Siderbar = () => {
    return (
        <aside>
            <h1>MERN <span>Taks</span></h1>
            <NuevoProyecto />
            <div className="proyectos">
                <h2>Tus Proyectos</h2>
            </div>
        </aside>
    )
}

export default Siderbar
