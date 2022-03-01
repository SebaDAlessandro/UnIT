const express = require('express');
const router = express.Router();
const {favoritesPost} = require('../controllers/favoritesRoutes');

const {Recruiter, Candidate, Contacted, Language} = require('../db.js');

router.get('/', async (req, res, next) => {
    try{
        const candidatosF = await Contacted.findAll()
    res.status(200).json({candidatosF})
    } catch(error){
        next(error)
    }
    
})

router.get('/:id', async(req, res, next) => {
    const {id} = req.params;
    
    if(id){
       try {
        
        const candidatos = await Candidate.findByPk(id,{
            include: [
                {model: Language}
            ]
        })
        if(candidatos !=0){
            res.status(200).json({
               candidatos
            })

        }
    } catch (error) {
        next(error)
    }
}})

router.post('/', async (req, res, next) => {

    const {idrecruiter, idcandidate} = req.body;
            // (1) ,      [1,8]x  (1)
    
    let favor = favoritesPost(idcandidate)

    try {
    
        const encontrado = await Recruiter.findOne({
            where: {id: idrecruiter}})

        const creado = await encontrado.addCandidate(favor)
        res.json(creado)

    } catch(error){
        next(error);
    }
})


module.exports = router;