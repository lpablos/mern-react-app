import React , {useState, useContext}from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/autenticacion/AuthContext'
import AlertaContext from '../../context/alertas/AlertaContext'

const Login = () => {
    const alertaContext = useContext(AlertaContext)
    const { alerta, mostrarAlertas } = alertaContext

    const authContext = useContext(AuthContext)
    const {mensaje, autenticado, iniciarSesion} = authContext


    const [usuario, setUsuario] = useState({
        email:'',
        password:''
    })
    const {email, password} = usuario

    const onChange = e =>{
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault()
        // Validar que no existan campos vacios
        if(email.trim() === '' || password.trim() === '' ){
            mostrarAlertas('Todos los campos son obligatorios','alerta-error')
            return
        }
        iniciarSesion(usuario)
        
    }
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sessión</h1>
                <p>
                    {
                        alerta
                        ? (<div className={`alerta ${alerta.categoria}`}>*{alerta.msg}</div>)
                        : null 
                    }
                </p>
                <form 
                
                    onSubmit={onSubmit}
                    >
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
                    <div className="compo-form">
                        <input type="submit" value="Iniciar Sesión" className="btn bnt-primario btn-block"/>
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">Obterner Cuenta</Link>


            </div>
        </div>
    )
}

export default Login
