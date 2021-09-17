const express = require('express')
const conectarDB = require('./config/db')

// Crear el servidor
const app = express()
// Conectar a la base de datos
conectarDB()

// Habilitar express JSON
app.use( express.json({ extended: true }) )

// puerto de la app
const PORT = process.env.PORT || 4000;

// importar rutas
// Registro de usuario
app.use('/api/usuarios',require('./routes/usuarios'))
// Login del usuario
app.use('/api/auth',require('./routes/auth'))
// Proyectos del proyectos
app.use('/api/proyectos',require('./routes/proyectos'))

// Levantamiento del servicio
app.listen(PORT, ()=>{
    console.log(`El servidor corriendo en el puerto ${PORT}`);
})