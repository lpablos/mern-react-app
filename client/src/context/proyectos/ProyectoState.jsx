import React,{useReducer} from "react"


import ProyectoContext from "./ProyectoContext"
import ProyectoReduce from "./ProyectoReduce"

const ProyectoState = props => {
    const initialState = {
        formulario : true
    }

    // dispache para ejecutaras las acciones
    const [state, dispatch] = useReducer(ProyectoReduce, initialState)
    
    // Serie de funciones para el CRUD
    return(
        <ProyectoContext.Provider
            value = {{
                formulario : state.formulario
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState