const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const candidates = require('./candidates');
const language = require('./language');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/candidates', candidates)
router.use('/language', language)



module.exports = router;
