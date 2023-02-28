const { Router } = require('express');

const { validarJWT, validarCampos } = require('../middlewares');


const { login, validarTokenUsuario } = require('../controllers/auth');
const { check } = require('express-validator');


const router = Router();

router.post('/login', [
    check("user", "El usuario es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio").not().isEmpty(),
    validarCampos
], login );

router.get('/',[
    validarJWT
], validarTokenUsuario );



module.exports = router;