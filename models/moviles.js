const { Schema, model } = require('mongoose');

const MovilSchema = Schema({
    movil: {
        type: Number,
        unique: true
    },
    estado: {
        type: Boolean,
        default: false,
    },
    ubicacion: {
        type: [Number],
    },
    chofer: {
        type: String,
    },
    doctor: {
        type: String,
    },
    estado: {
        type: String
    },
    servicio: {
        type: Boolean
    }
});

module.exports = model( 'Movil', MovilSchema );
