import React , {useState} from 'react'
import { Link } from 'react-router-dom'

const NuevaCuenta = () => {
    const [usuario, setUsuario] = useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:'' 
    })
    const { nombre, email, password, confirmar} = usuario

    const onChange = e =>{
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault()
        alert("Hola nueva cuenta")
    }
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Nueva Cuenta</h1>
                <form 
                
                    onSubmit={onSubmit}
                    >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" 
                            name="nombre" 
                            id="nombre" 
                            placeholder="Nombre"
                            onChange={onChange}
                            value={nombre}
                            />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Email"
                            onChange={onChange}
                            value={email}
                            />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Password"
                            onChange={onChange}
                            value={password}
                            />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input 
                            type="password" 
                            name="confirmar" 
                            id="confirmar" 
                            placeholder="Confirmar Password"
                            onChange={onChange}
                            value={confirmar}
                            />
                    </div>
                    <div className="compo-form">
                        <input type="submit" value="Registrarme" className="btn bnt-primario btn-block"/>
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">Iniciar Sesión</Link>
            </div>
        </div>
    )
}

export default NuevaCuenta
