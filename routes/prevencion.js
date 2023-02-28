const { Router } = require('express');
const { getPrevencion, addPrevencion } = require('../controllers/prevencion');

const router = Router();


router.get('/', getPrevencion )

router.post('/', addPrevencion )




module.exports = router;