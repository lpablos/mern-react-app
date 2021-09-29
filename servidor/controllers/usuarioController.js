const { findOne } = require('../models/Usuario');
const Usuario = require('../models/Usuario')
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')

exports.crearUsuarios = async (req, res) =>{
    // Revisar si hay errores
    const errores = validationResult(req)
    if( !errores.isEmpty()){
        return res.status(400).json({ errores: errores.array() }) 
    }
    // Extraer mail y password
    const {email, password}= req.body
    try {
        // Revisar que el usuario sea unico
        let usuario = await Usuario.findOne({email})
        if(usuario){
            return res.status(400).json({msg:'El usuario ya existe'})
        }

        // Crea el usuario
        usuario = new Usuario(req.body);
        // Hashear el password
        const salt = await bcryptjs.genSalt(10)
        usuario.password = await bcryptjs.hash(password, salt)
        // Guardar el usuario
        await usuario.save()
        // Crear y firmar JWT
        const payload = {
            usuario: {
                id: usuario.id
            }
        }
        // Firmar JWT
        jwt.sign(payload, process.env.SECRETA,{expiresIn: 3600},(error, token)=>{
            if(error) throw error
            // Si todo sale bien regresa un token
            res.json({token})
        })
        
    } catch (error) {
        // En caso de existir un error
        console.log("Error en el guardado", error)
        res.status(400).send('Existio un error, en el guardado del usuario')
    }

}

