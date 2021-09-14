// Rutas para crear usuarios
const express = require('express')
const router = express.Router()

// crear un usuario
// api/usuario
router.get('/',()=>{
    console.log("Hola metodo get");
})

router.post('/usuario',()=>{
    console.log('creando usuario');
})

module.exports = router