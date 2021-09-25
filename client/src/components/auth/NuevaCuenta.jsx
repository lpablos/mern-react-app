import React , {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import AlertaContext from '../../context/alertas/AlertaContext'
import AuthContext from '../../context/autenticacion/AuthContext'

const NuevaCuenta = () => {

    const alertaContext = useContext(AlertaContext)
    const { alerta, mostrarAlertas } = alertaContext

    const authContext = useContext(AuthContext)
    const { registrarUsuario } = authContext

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
        console.log('Esto es', 
            nombre.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            confirmar.trim() === ''            
        )
        // Validar que no haya campos vacios
        if(
            nombre.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            confirmar.trim() === ''            
        ){
            mostrarAlertas('Todos los campos son obligatorios','alerta-error')
            return
        }
        // Password minimo de 6 caracteres
        if(password.trim().length < 6){
            mostrarAlertas('La contraseña tiene que ser mayor a 6 caracteres','alerta-error')
            return
        }
        // Los 2 password son iguales
        if(password.trim() !== confirmar.trim()){
            mostrarAlertas('Las contraseñas no son iguales','alerta-error')
            return
        }
        // Pasarlo al action en forma de objecto
        registrarUsuario({
            nombre,
            email,
            password
        })
    }

    return (
        <div className="form-usuario">
            
           
            <div className="contenedor-form sombra-dark">
                <h1>Nueva Cuenta</h1>
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
