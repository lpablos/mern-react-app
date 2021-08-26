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



const App = () => {
  return (
    <Router>    
      <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/nueva-cuenta">
            <NuevaCuenta />
          </Route>
          <Route exact path="/proyectos">
            <Proyectos />
          </Route>
        </Switch>
    </Router>
  )
}

export default App



