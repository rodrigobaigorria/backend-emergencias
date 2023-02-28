const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const io = require('socket.io')();

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        this.io = io;

        this.paths = {
            auth:       '/api/auth',
            via:     '/api/via',
            prevencion:     '/api/prevencion',
            moviles: '/api/moviles',
            servicios:  '/api/servicios',
            paciente:  '/api/paciente',
            usuarios:   '/api/usuarios',
            // uploads:    '/api/uploads',
        }
        this.io.on('connection', (socket) => {
            console.log(socket.id);
        })
        this.app.use(express.static('public'));

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

        // Fileupload - Carga de archivos
        this.app.use( fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));

    }

    routes() {
        
        this.app.use( this.paths.auth, require('../routes/auth'));
        // this.app.use( this.paths.buscar, require('../routes/buscar'));
        this.app.use( this.paths.moviles, require('../routes/moviles'));
        this.app.use( this.paths.via, require('../routes/via'));
        this.app.use( this.paths.prevencion, require('../routes/prevencion'));
        this.app.use( this.paths.servicios, require('../routes/servicio'));
        this.app.use( this.paths.paciente, require('../routes/paciente'));
        this.app.use( this.paths.usuarios, require('../routes/usuarios'));
        // this.app.use( this.paths.uploads, require('../routes/uploads'));
        
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
        this.io.listen(8000, () => {
            console.log('socket en puerto 8000');
        });

    }

}




module.exports = Server;
