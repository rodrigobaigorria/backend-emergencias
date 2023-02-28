const { Router } = require('express');

const {
    obtenerPaciente,
     } = require('../controllers/paciente');
const { validarJWT } = require('../middlewares');

const router = Router();

/**
 * {{url}}/api/servicios
 */

//  Obtener todos los servicios - publico
// router.get('/', obtenerPacientes );

// Obtener un servicio por telefono - publico
router.get('/:telefono', [validarJWT], obtenerPaciente );

// Crear categoria - privado - cualquier persona con un token válido
// router.post('/', crearPaciente );

// Actualizar - privado - cualquiera con token válido
// router.put('/:id', actualizarPaciente );


module.exports = router;