const { Schema, model } = require('mongoose');

const PrevencionSchema = Schema({
    tipo: {
        type: String,
    },
    
});


module.exports = model( 'Prevencion', PrevencionSchema );
