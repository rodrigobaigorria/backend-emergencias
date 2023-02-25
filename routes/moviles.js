const { Router } = require('express');

const { crearMovil,
        obtenerMoviles,
        obtenerMovil,
        actualizarMovil, 
        borrarMovil } = require('../controllers/moviles');

const router = Router();

/**
 * {{url}}/api/categorias
 */

//  Obtener todas las categorias - publico
router.get('/', obtenerMoviles );

// Obtener una categoria por id - publico
router.get('/:id', obtenerMovil );

// Crear movil - privado - cualquier persona con un token válido
router.post('/', crearMovil );

// Actualizar - privado - cualquiera con token válido
router.put('/:id', actualizarMovil );

// Borrar una categoria - Admin
router.delete('/:id', borrarMovil);



module.exports = router;