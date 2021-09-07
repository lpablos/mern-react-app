import React, {useReducer} from 'react'
import TareaContext from './TareaContext'
import TareaReduce from './TareaReduce'

const TareaState = props =>{
    
   
    const initialState = {
        tareas : [
            {
                nombre: 'Elegir Plataforma',
                estado: true,
                proyectoId: 1
            },
            {
                nombre: 'Elegir Colores',
                estado: false,
                proyectoId: 2
            },
            {
                nombre: 'Elegir Plataformas de Pago',
                estado: true,
                proyectoId: 3
            },
            {
                nombre: 'Elegir Hosting',
                estado: false,
                proyectoId: 4
            },
            {
                nombre: 'Elegir Colores',
                estado: false,
                proyectoId: 2
            },
            {
                nombre: 'Elegir Plataformas de Pago',
                estado: true,
                proyectoId: 2
            },
            {
                nombre: 'Elegir Hosting',
                estado: false,
                proyectoId: 1
            },
            {
                nombre: 'Elegir Colores',
                estado: false,
                proyectoId: 2
            },
            {
                nombre: 'Elegir Plataformas de Pago',
                estado: true,
                proyectoId: 3
            },
            {
                nombre: 'Elegir Hosting',
                estado: false,
                proyectoId: 4
            },
        ]
    }

    const [state, dispatch] = useReducer(TareaReduce, initialState)

    return (
        <TareaContext.Provider
            value = {{
                tareas: state.tareas
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState
