const express = require('express');
const router = express.Router();
//const {favoritesPost} = require('../controllers/favoritesRoutes');

const {Recruiter, Candidate, Language, Contacted, Favorite} = require('../db.js');


router.get('/favorite/', async (req , res, next) => {
    try{
         const dato = await Favorite.findAll()
         res.json(dato)
    }catch(error){
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

        }else{
            try{
                const candidatosF = await Contacted.findAll()
                res.status(200).json({
                    candidatosF
                })

            } catch(e){
                res.status(404).json({
                    message: 'Candidate not found'
                })
            }
            
        }
        // res.json(candidatos);
    } catch (error) {
        next(error)
    }
}
})

router.post('/', async (req, res, next) => {

    const {idrecruiter, idcandidate} = req.body;
            // (1) ,      [1,8]x  (1)
   
    let candidato = await Candidate.findByPk(idcandidate) 

    try {

        const encontrado = await Recruiter.findByPk(idrecruiter)

        const creado = await encontrado.addCandidate(candidato)
        res.json(creado)

    } catch(error){
        next(error);
    }
})


router.delete('/candidate/:id', async (req, res) => {

    // http://localhost:3001/favorites/candidate/:{id}

    const {id} = req.params
    console.log(id)
    
    try{
        const candidateB = await Contacted.findByPk(id);

        
        if(candidateB){
            await candidateB.destroy();
            res.status(200).send ('Candidate deleted')

        }
    } catch(error){
        res.status(404).send('Candidate not found')
    }
})


       
module.exports = router;