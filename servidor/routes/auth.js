// Rutas para autenticas usuarios
const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const authController = require('../controllers/authController')
const { route } = require('./usuarios')
const auth = require('../middleware/auth')

// api/usuario
// Iniciar session
router.post(
    '/',
    // [
    //     check('email','Agregar un correo valido').isEmail(),
    //     check('password','La contraseña debe ser minimo 6 caracteres').isLength({ min : 6})
    // ],
    authController.autenticarUsuario
    )

// obtiene el usuario autenticado
router.get(
    '/',
    auth,
    authController.usuarioAutenticado
)

module.exports = router