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
