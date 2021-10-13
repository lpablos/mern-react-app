import React from 'react'


const Barra = () => {

    return (
        <header className="app-header">
            <p className="nombre-usuario">
                Hola <span>luis Jorge</span>
                <nav className="nav-principal">
                    <a href="#!">Cerrar Sesión</a>
                </nav>
            </p>
        </header>
    )
}

export default Barra
