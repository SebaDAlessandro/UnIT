const express = require('express');
const router = express.Router();
const {favoritesPost} = require('../controllers/favoritesRoutes');

const {Recruiter, Candidate} = require('../db.js');


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

router.delete('/candidate/:id', async (req, res) => {

    // http://localhost:3001/candidates/candidate/:{id}

    const {id} = req.params
    console.log(id)
    
    try{
        const candidateB = await Candidate.findByPk(id);

        
        if(candidateB){
            await candidateB.destroy();
            res.status(200).send ('Candidate deleted')

        }
    } catch(error){
        res.status(404).send('Candidate not found')
    }
})

module.exports = router;