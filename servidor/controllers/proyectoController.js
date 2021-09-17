const { findOne } = require('../models/Proyecto')
const Proyecto = require('../models/Proyecto')
const { validationResult } = require('express-validator')

exports.crearProyectos = async(req, res)=>{
    // Revisar si hay errores
    const errores = validationResult(req)
    if(!errores.isEmpty()){
        return res.status(400).json({ errores: errores.array() })
    }
    try {
        // Crear un nuevo proyecto
        const proyecto = new Proyecto(req.body)
        // Asociamos el creador via JWT
        proyecto.creador = req.usuario.id
        // Guardamos el proyecto
        proyecto.save()
        return res.status(200).json({msg: 'Proyecto agreago correctamente'})   
    } catch (error) {
        console.log(error);
        res.status(400).send('Error al intentar guardar un proyecto')
    }
}