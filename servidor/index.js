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
app.use('/api/usuarios',require('./routes/usuarios'))


app.listen(PORT, ()=>{
    console.log(`El servidor corriendo en el puerto ${PORT}`);
})