const { response } = require('express');
const { Servicio } = require('../models');
const { Paciente } = require('../models');


const obtenerServicios = async(req, res = response ) => {

    const totalServicios = await Servicio.find({});
    res.json({
        ok: true,
        totalServicios
    })

}

const obtenerServicio = async(req, res = response ) => {

    const telefono = req.params.telefono;
    console.log(telefono);
    const regex = new RegExp(telefono, 'i');
    await Servicio.find( {$or: [{telefono:regex}] }, (err, dbServicios) => {
        if (err) throw new Error(err);

        res.json({
            dbServicios
        })
    } )

}

const crearServicio = async(req, res = response ) => {
    
    let body = req.body;
    body.fecha = Date.now();

    const totalServicios = await Servicio.find({});
    body.servicio = totalServicios.length + 3100;
    console.log(body);

    const servicio = new Servicio( body );

    // Guardar DB
    const nuevoServicio = await servicio.save();
    await Paciente.find({telefono: body.telefono}, (err, dbPaciente) => {
        if (err) throw err;
        console.log(dbPaciente.length);
        if (dbPaciente.length > 0 ) {
            return;
        } else {
            console.log('guardamos el paciente');
            const paciente = new Paciente( body );
            paciente.save();
        }
    })

    res.json({
        ok: true,
        nuevoServicio
    });

}

const actualizarServicio = async( req, res = response ) => {

   /*  const { id } = req.params;
    const { estado, usuario, ...data } = req.body;

    if( data.nombre ) {
        data.nombre  = data.nombre.toUpperCase();
    }

    data.usuario = req.usuario._id;

    const producto = await Producto.findByIdAndUpdate(id, data, { new: true });

    await producto
        .populate('usuario', 'nombre')
        .populate('categoria', 'nombre')
        .execPopulate();
        
    res.json( producto ); */

}

const borrarServicio = async(req, res = response ) => {

   /*  const { id } = req.params;
    const productoBorrado = await Producto.findByIdAndUpdate( id, { estado: false }, {new: true });

    res.json( productoBorrado ); */
}




module.exports = {
    crearServicio,
    obtenerServicios,
    obtenerServicio,
    actualizarServicio,
    borrarServicio
}