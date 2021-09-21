const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const tareaController = require('../controllers/tareaController')
const auth = require('../middleware/auth')

router.post('/',
        auth,
        [
            check('nombre', 'El nombre es obligatorio').not().notEmpty(),
            check('proyecto','El proyecto es obligatorio').not().notEmpty()
        ],
        tareaController.crearTarea)

// Obtener las tareas por proyecto

router.get('/proyecto/:idProyecto',
        auth,
        tareaController.obtenerTareas)

router.put('/:id',
        auth,
        tareaController.actualizarTarea
        )

router.delete('/:id',
        auth,
        tareaController.eliminarTarea
        )

module.exports = router