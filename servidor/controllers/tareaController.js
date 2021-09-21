const Tarea = require('../models/Tarea')
const Proyecto = require('../models/Proyecto')
const {validationResult} = require('express-validator')
const { json } = require('express')

// Todo lo relacionado a la logica

// crear una nueva tarea
exports.crearTarea = async (req, res)=>{
    const errores = validationResult(req)
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array() })
    }
    // Estrater el proyecto y comprobar si existe
    const {proyecto, nombre} = req.body
    try {
        // Existe proyecto
        const ExisteProyecto = await Proyecto.findById(proyecto)
        if(!ExisteProyecto){
            return res.status(404).json({msg:'Proyecto no encontrado'})
        }
        // Pertenece al mismo usuario
        if(ExisteProyecto.creador.toString() !== req.usuario.id){
            return res.status(401),json({msg: 'No autorizado'})
        }
        // Creamos la tarea
        const tarea = new Tarea(req.body)
        await tarea.save()
        res.json({ tarea })
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al crear una tarea')
    }
}

// Obtener tareas por proyecto
exports.obtenerTareas = async (req, res)=>{
    // Funcion modificada, no era compatible con la version del
    try {
        const proyecto = req.params.idProyecto
        const ExisteProyecto = await Proyecto.findById(proyecto)
        
        // Existe el proyecto
        if(!ExisteProyecto){
            return res.status(404).json({msg:'Proyecto no encontrado'})
        }
        // Pertence a la persona
        if(ExisteProyecto.creador.toString() !== req.usuario.id){
            return res.status(401).json({msg:'No autorizado'})
        }
        const tareas = await Tarea.find({"proyecto": proyecto })
        return res.status(200).json({tareas})
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error servidor')
    }
    
}

// Actualizar Tarea
exports.actualizarTarea = async (req, res)=>{
    try {
        // const proyecto = req.params.idProyecto
        const idTarea = req.params.id
        const {nombre, estado, proyecto} = req.body
        

        // Consulta y Verifica la tarea
        const tareaExiste = await Tarea.findById(req.params.id)
        if(!tareaExiste){
            return res.status(404).json({ msg: 'Tarea no encontrada'})
        }

        // Consulta y verificacion de pertenencia del proyecto
        const nuevoProyecto = await Proyecto.findById(proyecto)
        if(nuevoProyecto.creador.toString() !==  req.usuario.id) {
            return res.status(401).json({msg: 'No autorizado'})
        }

        // Crea nuevo objecto con la informacion enviada 
        const nuevaTarea = {}
        if(nombre) nuevaTarea.nombre = nombre
        if(estado) nuevaTarea.estado = estado

        // Guardado de tarea
        const tareaUpdate = await Tarea.findOneAndUpdate({ _id: req.params.id }, nuevaTarea, {new: true} ) 
        return res.status(200).json({tareaUpdate})
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor')
    }
}

// Elimina una tarea
exports.eliminarTarea = async(req, res)=>{
    try {
        // const proyecto = req.params.idProyecto    
        const {proyecto} = req.body
        // Consulta y Verifica la tarea
        const tareaExiste = await Tarea.findById(req.params.id)
        if(!tareaExiste){
            return res.status(404).json({ msg: 'Tarea no encontrada'})
        }

        // Consulta y verificacion de pertenencia del proyecto
        const nuevoProyecto = await Proyecto.findById(proyecto)
        if(nuevoProyecto.creador.toString() !==  req.usuario.id) {
            return res.status(401).json({msg: 'No autorizado'})
        }

        // Eliminar tarea
        await Tarea.findOneAndRemove({_id: req.params.id})
        return res.status(200).json({msg:'Tarea eliminada'})

    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor')
    }
}