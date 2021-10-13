import React from 'react'
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import ProyectoState from './context/proyectos/ProyectoState';
import TareaState from './context/tareas/TareaState';
import AlertaState from './context/alertas/AlertaState';
import AuthState from './context/autenticacion/AuthState';

// High Order Component check if user is login roght now
import RutaPrivada from './components/rutas/RutaPrivada';





const App = () => {
  console.log(`Documento .env ${process.env.REACT_APP_BACKEND_URL}`);
  return (
      <ProyectoState>
        <TareaState>
          <AlertaState>
            <AuthState>
              <Router>    
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/nueva-cuenta" component={NuevaCuenta} />                      
                    <RutaPrivada exact path="/proyectos" component={Proyectos} />
                   
                  </Switch>
              </Router> 
            </AuthState>
          </AlertaState>
        </TareaState>
      </ProyectoState>
    
  )
}

export default App



