const { response } = require('express');
const { Paciente } = require('../models');

const obtenerPaciente = async(req, res = response ) => {

    const telefono = req.params.telefono;
    console.log(telefono);
    const regex = new RegExp(telefono, 'i');
    await Paciente.find( {$or: [{telefono:regex}] }, (err, dbPacientes) => {
        if (err) throw new Error(err);

        res.json({
            ok: true,
            dbPacientes
        })
    } )

}

module.exports = {
    obtenerPaciente
}