const { Schema, model } = require('mongoose');

const ServicioSchema = Schema({
    fecha: {
        type: String,
        required: true
    },
    servicio: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    paciente: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    entreCalles: {
        type: String,
    },
    localidad: {
        type: String,
        required: true
    },
    coords: {
      type: [Number],
      required: true,
    },
    dni: {
        type: String,
        required: true
    },
    edad: { 
        type: String,
        required: true 
    },
    sintomas: { 
        type: String, 
        required: true 
    },
    observaciones: { 
        type: String 
    },
    categoria: {
        type: String,
    },
    estado: {
        type: String,
    },
    movil: {
        type: String,
    },
    chofer: {
        type: String,
    },
    medico: {
        type: String,
    },
    traslado: {
        type: Boolean,
        default: false
    }
});


module.exports = model( 'Servicio', ServicioSchema );
