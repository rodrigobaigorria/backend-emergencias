const { Schema, model } = require('mongoose');

const MovilSchema = Schema({
    movil: {
        type: String,
        unique: true
    },
    estado: {
        type: String,
    },
    ubicacion: {
        type: [Number],
    },
    chofer: {
        type: String,
    },
    medico: {
        type: String,
    },
    enfermero: {
        type: String
    },
    servicio: {
        type: Boolean
    }
});

module.exports = model( 'Movil', MovilSchema );
