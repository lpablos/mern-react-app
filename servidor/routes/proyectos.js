const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const proyectoController = require('../controllers/proyectoController')
const auth = require('../middleware/auth')

// Crear proyectos
// api/proyectos
router.post('/',
            auth, 
            [
                check('nombre', 'nombre del proyecto es obligatorio').not().isEmpty()
            ],
            proyectoController.crearProyectos)


module.exports = router 

