import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/autenticacion/AuthContext'

const Barra = () => {
    const authContext = useContext(AuthContext)
    const { usuario, usuarioAutenticado, cerrarSesion} = authContext
    
    useEffect(() => {
        usuarioAutenticado()
    }, [])

    return (
        <header className="app-header">
            {
                usuario ?
                <p className="nombre-usuario">
                    Hola <span>{usuario.nombre}</span>
                    <nav className="nav-principal">
                        <button 
                            className="btn btn-blank cerrar-session"
                            onClick={()=>cerrarSesion()}>
                            Cerrar Sesión
                        </button>
                    </nav>
                </p>: 
                null
            }
        </header>
    )
}

export default Barra
