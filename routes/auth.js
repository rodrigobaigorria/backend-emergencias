const { Router } = require('express');

const { validarJWT } = require('../middlewares');


const { login, validarTokenUsuario } = require('../controllers/auth');


const router = Router();

router.post('/login', login );

router.get('/',[
    validarJWT
], validarTokenUsuario );



module.exports = router;