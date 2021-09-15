const Usuario = require('../models/Usuario')

exports.crearUsuarios = async (req, res) =>{
    try {
        // Crea el usuario
        let usuario = new Usuario(req.body);
        await usuario.save()
        res.status(200).send('Usuario agregado correctamente')
    } catch (error) {
        // En caso de existir un error
        console.log("Error en el guardado", error)
        res.status(400).send('Existio un error, en el guardado del usuario')
    }

}

