const { Router } = require('express');
const { getVia, addVia } = require('../controllers/via');

const router = Router();


router.get('/', getVia )

router.post('/', addVia )




module.exports = router;