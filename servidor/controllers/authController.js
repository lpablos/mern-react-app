const { findOne } = require('../models/Usuario');
const Usuario = require('../models/Usuario')
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')

exports.autenticarUsuario = async (req, res) =>{
    const errores = validationResult(req)
    if( !errores.isEmpty() ){
        return res.status(400).json({ errores: errores.array() })
    }
    const { email, password } = req.body
    try {
        // Revisar que sea un usuario registrado
        let usuario = await Usuario.findOne({email})
        if(!usuario){
            return res.status(400).json({msg: 'El usuario no existe'})
        }
        // revisar su contraseña
        const passCorrecto = await bcryptjs.compare(password, usuario.password)
        if(!passCorrecto){
            return res.status(400).json({ msg: 'Contraseña incorrecta'})
        }
        // Si todo es correccto JWt
        const payload = {
            usuario: {
                id: usuario.id
            }
        }
        jwt.sign(payload, process.env.SECRETA,{
                expiresIn: 3600
            }, (error, token)=>{
                if(error) throw error;
                res.status(200).json({
                    token
                })
            })

    } catch (error) {
        console.log('Este es el error', error)        
    }
}

// Obtiene que usuario esta autenticado
exports.usuarioAutenticado = async (req, res) =>{
    try {
        const usuario = await Usuario.findById(req.usuario.id).select('-password')
        res.status(200).json({
            usuario
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Existe un error'
        })
    }
}

