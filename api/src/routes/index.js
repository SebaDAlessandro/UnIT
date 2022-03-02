const { Router } = require('express');
const Recruiter = require('../models/Recruiter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const candidates = require('./candidates');
const language = require('./language');
const cuentarecruiter = require('./cuentarecruiter');
const favorites = require('./favorites');
const candidatesBulkcreate = require('./candidatesBulkcreate')



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/candidates', candidates);
router.use('/language', language);
router.use('/cuentarecruiter',cuentarecruiter);
router.use('/favorites', favorites);
router.use('/candidatesBulk', candidatesBulkcreate);




module.exports = router;
