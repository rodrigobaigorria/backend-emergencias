const { Schema, model } = require('mongoose');

const ViaSchema = Schema({
    tipo: {
        type: String,
    },
    
});


module.exports = model( 'Via', ViaSchema );
