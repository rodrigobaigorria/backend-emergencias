
const { Router } = require('express');

const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch } = require('../controllers/usuarios');
const { validarJWT } = require('../middlewares');

const router = Router();


router.get('/', [validarJWT], usuariosGet );

router.put('/:id', [validarJWT], usuariosPut );

router.post('/', [validarJWT], usuariosPost );

router.delete('/:id', [validarJWT], usuariosDelete );

router.patch('/', [validarJWT], usuariosPatch );





module.exports = router;