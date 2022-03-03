const { Router } = require('express');
const Recruiter = require('../models/Recruiter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const candidates = require('./candidates');
const language = require('./language');
const cuentarecruiter = require('./cuentarecruiter');
const favorites = require('./favorites');
const candidatesBulkcreate = require('./candidatesBulkcreate')
const technicalskill = require('./technicalSkill')
const softskill = require('./softSkill')
const orientation = require('./orientation')
const folders = require('./folders')
const formation = require('./formation')
const experience = require('./projectexperience')
const projectexperience = require('./projectexperience');
const contacted = require('./contacted');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/candidates', candidates);
router.use('/language', language);
router.use('/cuentarecruiter',cuentarecruiter);
router.use('/favorites', favorites);
router.use('/candidatesBulk', candidatesBulkcreate);
router.use('/technicalskill', technicalskill);
router.use('/softskill', softskill);
router.use('/orientation', orientation);
router.use('/folders', folders)
router.use('/formation', formation);
router.use('/experience', experience);
router.use('/projectexperience', projectexperience);
router.use('/contacted', contacted);






module.exports = router;
