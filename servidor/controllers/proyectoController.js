const { findOne, findById } = require('../models/Proyecto')
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

exports.obtenerProyectos = async (req, res)=>{
    try {
        const proyectos = await Proyecto
                            .find({ creador: req.usuario.id})
                            .sort({creado: -1 })
        res.status(200).json({proyectos})
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al obtener el listado de proyectos')
    }
}

exports.actualizarProyecto = async(req, res)=>{
    const errores = validationResult(req)
    if(!errores.isEmpty()){
        return res.status(400).json({ errores: errores.array() })
    }
    
    // Extraer la informacion del proyecto
    const { nombre } = req.body
    const nuevoProyecto = {}
    if(nombre){
        nuevoProyecto.nombre = nombre
    }    
    try {
        // revisar el ID
        let proyecto = await Proyecto.findById(req.params.id)
        // Proyecto existe o no
        if(!proyecto){
            return res.status(404).json({msg: 'Proyecto no encontador'})
        }
        // Verificar el creador del proyecto
        if(proyecto.creador.toString() !== req.usuario.id){
            return res.status(401).json({msg: 'No autorizado'})
        }
        // Actualizamos
        proyecto = await Proyecto.findByIdAndUpdate({_id: req.params.id},{$set: nuevoProyecto},{new: true})
        res.json({proyecto})

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor')
    }

    
}

exports.eliminarProyecto = async(req, res)=>{
    
    try {
        // revisar el ID
        let proyecto = await Proyecto.findById(req.params.id)
        // Proyecto existe o no
        if(!proyecto){
            return res.status(404).json({msg: 'Proyecto no encontador'})
        }
        // Verificar el creador del proyecto
        if(proyecto.creador.toString() !== req.usuario.id) {
            return res.status(401).json({msg: 'No autorizado'})
        }
        // Eliminar le proyecto
        await Proyecto.findOneAndRemove({ _id: req.params.id })
        res.json({msg: 'Proyecto Eliminado'})
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar')
    }
}