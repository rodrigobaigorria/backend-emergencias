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
    if (body._id) {
        body._id = null;
    }

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

     const { id } = req.params;
     console.log(id);
     console.log(req.body);
    const { ...data } = req.body;
    if (data.estado === 'Despachado') {
        data.despacho = await Date.now();
    }
    if (data.estado === 'Arribo') {
        data.arribo = await Date.now();
    }

    const servicio = await Servicio.findOneAndUpdate({_id: data._id}, data, { new: true }, (err, dbServicios) => {
        if (err) throw new Error(err);

        res.json( {
            ok: true,
            dbServicios
        } );
    });
        

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