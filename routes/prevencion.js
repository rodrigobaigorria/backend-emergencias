const { Router } = require('express');
const { getPrevencion, addPrevencion } = require('../controllers/prevencion');
const { validarJWT } = require('../middlewares');

const router = Router();


router.get('/', [validarJWT], getPrevencion )

router.post('/', [validarJWT], addPrevencion )




module.exports = router;