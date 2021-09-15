const { findOne } = require('../models/Usuario');
const Usuario = require('../models/Usuario')
const bcryptjs = require('bcryptjs')

exports.crearUsuarios = async (req, res) =>{
    // Extraer mail y password
    const {email, password}= req.body
    try {
        // Revisar que el usuario sea unico
        let usuario = await Usuario.findOne({email})
        if(usuario){
            return res.status(400).json({msj:'El usuario ya existe'})
        }

        // Crea el usuario
        usuario = new Usuario(req.body);
        // Hashear el password
        const salt = await bcryptjs.genSalt(10)
        usuario.password = await bcryptjs.hash(password, salt)
        // Guardar el usuario
        await usuario.save()
        return res.status(200).json({msj:'Usuario creado correctamente'})
        
    } catch (error) {
        // En caso de existir un error
        console.log("Error en el guardado", error)
        res.status(400).send('Existio un error, en el guardado del usuario')
    }

}

