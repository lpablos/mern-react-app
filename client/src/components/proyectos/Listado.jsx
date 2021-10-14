import React, {useContext, useEffect} from 'react'
import Proyecto from './Proyecto'
import AlertaContext from '../../context/alertas/AlertaContext';
import ProyectoContext from '../../context/proyectos/ProyectoContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Listado = () => {
    const proyectosContext = useContext(ProyectoContext);
    const { mensaje, proyectos, obtenerProyectos } = proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlertas } = alertaContext;

    useEffect(() => {
        
        // si hay un error
        if(mensaje) {
            
            mostrarAlertas(mensaje.msg, mensaje.categoria);
        }

        obtenerProyectos();
        
        // eslint-disable-next-line
    }, [mensaje]);
    
    // Verificacion en caso existir listado
    if(proyectos.length === 0) return <p>No existen proyectos, crea uno</p>

    return (
        <ul className="listado-proyectos">  
        { 
          alerta
            ? ( <div className={`alerta ${alerta.categoria} `}>{alerta.msg}</div>  ) 
            : null  
        }
            <TransitionGroup>
                { proyectos.map( proyecto =>(      
                                   
                    <CSSTransition
                        key={proyecto._id}
                        timeout={200}
                        classNames="proyecto"
                    >
                        <Proyecto
                            key={proyecto._id}
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                
                ))}           
            </TransitionGroup>
        </ul>
    )
}

export default Listado
