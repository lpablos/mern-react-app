const express = require('express')
const conectarDB = require('./config/db')
const cors = require('cors')

// Crear el servidor
const app = express()
// Conectar a la base de datos
conectarDB()

// Habilitar cors
app.use(cors())

// Habilitar express JSON
app.use( express.json({ extended: true }) )

// puerto de la app
const port = process.env.port || 4000;

// importar rutas
// Registro de usuario
app.use('/api/usuarios',require('./routes/usuarios'))
// Login de usuario
app.use('/api/auth',require('./routes/auth'))
// Proyectos de proyectos
app.use('/api/proyectos',require('./routes/proyectos'))
// tareas de tarea
app.use('/api/tareas',require('./routes/tareas'))

// Levantamiento del servicio
// Configuracion para que Heroku de el dominio
app.listen(port,'0.0.0.0', () => {
    console.log(`El servidor corriendo en el puerto ${port}`);
})