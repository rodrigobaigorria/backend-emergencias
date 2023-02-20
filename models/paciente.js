const { Schema, model } = require('mongoose');

const PacienteSchema = Schema({
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
    dni: {
        type: String,
        required: true
    },
    edad: { 
        type: String,
        required: true 
    }
});


module.exports = model( 'Paciente', PacienteSchema );
