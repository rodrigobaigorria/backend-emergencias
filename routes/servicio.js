const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT, esAdminRole } = require('../middlewares');

const { crearServicio,
        obtenerServicio,
        obtenerServicios,
        actualizarServicio, 
        borrarServicio } = require('../controllers/servicio');

const router = Router();

/**
 * {{url}}/api/servicios
 */

//  Obtener todos los servicios - publico
router.get('/', obtenerServicios );

// Obtener un servicio por telefono - publico
router.get('/:telefono', obtenerServicio );

// Crear categoria - privado - cualquier persona con un token válido
router.post('/', crearServicio );

// Actualizar - privado - cualquiera con token válido
router.put('/:id', actualizarServicio );

// Borrar una categoria - Admin
router.delete('/:id',[
    validarJWT,
    esAdminRole,
], borrarServicio);


module.exports = router;