const express = require('express')
const conectarDB = require('./config/db')
const cors = require('cors')

// Crear el servidor
const app = express()
// Conectar a la base de datos
conectarDB()

// Habilitar cors
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

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