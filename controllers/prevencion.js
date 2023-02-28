const { response } = require('express');
const Prevencion = require('../models/prevencion');

const getPrevencion = async (req, res ) => {
  
    await Prevencion.find({}, (err, dbPrevencion) => {
        if (err) throw err;
        res.json({
            ok: true,
            dbPrevencion
        })
    })
}

const addPrevencion = async (req, res) => {

    const { tipo } = req.body;
    console.log(tipo);

    await Prevencion.find({tipo}, (err, dbPrevencion) => {
        if (err) throw err;
        if (dbPrevencion.length > 0 ) {
            return;
        } else {
            console.log('guardamos el tipo');
            const prevencion = new Prevencion( req.body );
            prevencion.save();
        }
        res.json({
            ok: true,
            dbPrevencion
        })
    })

}


module.exports = {
    getPrevencion,
    addPrevencion
}