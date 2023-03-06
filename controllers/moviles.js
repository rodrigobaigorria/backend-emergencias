const { response } = require('express');
const { Movil } = require('../models');


const obtenerMoviles = async(req, res = response ) => {

   Movil.find({}, (err, DBMovil) => {
    if (err) throw new Error(err);

    res.json({
        ok: true,
        DBMovil
    })
   })
}

const obtenerMovil = async(req, res = response ) => {

    /* const { id } = req.params;
    const categoria = await Categoria.findById( id )
                            .populate('usuario', 'nombre');

    res.json( categoria ); */

}

const crearMovil = async(req, res = response ) => {

    const body = req.body;
    console.log(body);

    const movilDB = await Movil.findOne({movil: body.movil});

    if ( movilDB ) {
        return res.status(400).json({
            msg: `El movil ${ movilDB.movil }, ya existe`
        });
    }

    // Generar la data a guardar

    await new Movil(body).save();

    res.json({
        ok: true
    });

}

const actualizarMovil = async( req, res = response ) => {
    
    const { user } = req.params;
    const { servicio, movil, ...data } = req.body;

    const movilUp = await Movil.findOneAndUpdate({movil: user}, data, { new: true });

    res.json( movilUp );

}

const borrarMovil = async(req, res =response ) => {

    /* const { id } = req.params;
    const categoriaBorrada = await Categoria.findByIdAndUpdate( id, { estado: false }, {new: true });

    res.json( categoriaBorrada ); */
}




module.exports = {
    crearMovil,
    obtenerMovil,
    obtenerMoviles,
    actualizarMovil,
    borrarMovil
}