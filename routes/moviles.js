const { Router } = require('express');

const { crearMovil,
        obtenerMoviles,
        obtenerMovil,
        actualizarMovil, 
        borrarMovil } = require('../controllers/moviles');
const { validarJWT } = require('../middlewares');

const router = Router();

/**
 * {{url}}/api/categorias
 */

//  Obtener todas las categorias - publico
router.get('/', [validarJWT], obtenerMoviles );

// Obtener una categoria por id - publico
router.get('/:id', [validarJWT], obtenerMovil );

// Crear movil - privado - cualquier persona con un token válido
router.post('/', [validarJWT], crearMovil );

// Actualizar - privado - cualquiera con token válido
router.put('/:id', [validarJWT], actualizarMovil );

// Borrar una categoria - Admin
router.delete('/:id', [validarJWT], borrarMovil);



module.exports = router;