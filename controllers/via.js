const { response } = require('express');
const Via = require('../models/via');

const getVia = async (req, res ) => {
  
    await Via.find({}, (err, dbVia) => {
        if (err) throw err;
        res.json({
            ok: true,
            dbVia
        })
    })
}

const addVia = async (req, res) => {

    const { tipo } = req.body;
    console.log(tipo);

    await Via.find({tipo}, (err, dbVia) => {
        if (err) throw err;
        if (dbVia.length > 0 ) {
            return;
        } else {
            console.log('guardamos el tipo');
            const via = new Via( req.body );
            via.save();
        }
        res.json({
            ok: true,
            dbVia
        })
    })

}


module.exports = {
    getVia,
    addVia
}