const express = require('express');
const router = express.Router();
//const {favoritesPost} = require('../controllers/favoritesRoutes');

const {Recruiter, Candidate, Language, Contacted, Favorite, Technicalskills, Project_experience, Softskill} = require('../db.js');


router.get('/favorite/', async (req , res, next) => {
    try{
         const dato = await Favorite.findAll()
         res.json(dato)
    }catch(error){
        next(error)
    } 

 })
 

router.get('/:id', async (req, res, next ) => {
    const { id } = req.params;

    if(id){
        try{
            const todos = await Recruiter.findByPk(id,{
                include:[
                  {model: Candidate , include: [{model: Language}, {model: Contacted}, {model: Technicalskills}, {model: Softskill}, {model: Project_experience}] }
                ]
            })

          res.json(todos)

        }catch(error){
            res.send(error.message)
        }
    }else{
        res.send("ID no valido")
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


 router.delete("/candidate/:candidateId", async (req, res, next) => {
    const {candidateId} = req.params;
    const {recruiterId} = req.body;
    try {
        const recruiter = await Recruiter.findByPk(recruiterId);
        if(recruiter){
            await recruiter.removeCandidate([candidateId]);
            res.json({msg: `El candidato fue desvinculada de favoritos`})
        }

    } catch (error) {
        next(error)
    }
})

router.get('/table', async(req, res, next) => {
    try {
        const candidates = await Contacted.findAll({
            include: [
                {model: Language}, {model: Contacted}, {model: Technicalskills}, {model: Softskill}, {model: Project_experience}
            ]
        })
        res.json(candidates);
    } catch (error) {
        next(error)
    }
})

module.exports = router;
