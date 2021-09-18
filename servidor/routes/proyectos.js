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
                check('nombre', 'Nombre de proyecto obligatorio').not().isEmpty()
            ],
            proyectoController.crearProyectos)

// Obtiene todos los proyectos del usuario actual
router.get('/',
            auth,   
            proyectoController.obtenerProyectos)

// Actualizar 
router.put('/:id',
            auth,
            [
                check('nombre', 'Nombre de proyecto obligatorio').not().isEmpty()
            ],   
            proyectoController.actualizarProyecto)
            
//  Eliminar proyecto
router.delete('/:id',
            auth,              
            proyectoController.eliminarProyecto)


module.exports = router 

