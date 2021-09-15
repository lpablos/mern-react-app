// Rutas para crear usuarios
const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')
const { check } = require('express-validator')

// crear un usuario
// api/usuario
router.post(
    '/',
    [
        check('nombre','El nombre es obligatorio').not().isEmpty(),
        check('email','Agregar un correo valido').isEmail(),
        check('password','La contraseña debe ser minimo 6 caracteres').isLength({ min : 6})
    ],
    usuarioController.crearUsuarios
    )

module.exports = router