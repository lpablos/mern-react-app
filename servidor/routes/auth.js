// Rutas para autenticas usuarios
const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const authController = require('../controllers/authController')

// crear un usuario
// api/usuario
router.post(
    '/',
    [
        check('email','Agregar un correo valido').isEmail(),
        check('password','La contraseña debe ser minimo 6 caracteres').isLength({ min : 6})
    ],
    authController.autenticarUsuario
    )

module.exports = router