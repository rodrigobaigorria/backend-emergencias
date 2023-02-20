const { Schema, model } = require('mongoose');

const MovilSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    ubicacion: {
        type: String,
    },
    chofer: {
        type: String,
    },
    doctor: {
        type: String,
    }
});


MovilSchema.methods.toJSON = function() {
    const { __v, estado, ...data  } = this.toObject();
    return data;
}


module.exports = model( 'Movil', MovilSchema );
