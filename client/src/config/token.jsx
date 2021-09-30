import clienteAxios from "./axios"
// Aqui se definen las cabeceras en el usuario para hacer consultas en las funciones del get
const tokenAuth = token =>{
    if(token){
        clienteAxios.defaults.headers.common['x-auth-token'] = token
    }else{
        delete clienteAxios.defaults.headers.common['x-auth-token']
    }
}

export default tokenAuth