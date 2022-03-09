const express = require('express');
const router = express.Router();


const {Candidate, Orientation} = require('../db.js');

router.get('/', async(req, res, next) => {
    const {name} = req.query
    try {
        const orientations = await Orientation.findAll({
            include:[
                {
                   model: Candidate
                   
                }
            ]
           
        })
        res.json(orientations);
    } catch (error) {
        next(error)
    }
})




router.post("/", async (req, res, next) => {

    const {name} = req.body;

    try{
        
        const [o, creado] = await Orientation.findOrCreate({
            where: {name: name}
        })
       

        if(!creado){
            res.json({msg: "la orientation ya existe"})
        }else{
            res.json({msg: "la orientation fue creada correctamente"})
        }

    } catch (error){
        next(error)
    }

})


router.post("/:idCandidate", async (req, res, next) => {
    const {idCandidate} = req.params;
    const {name} = req.body;

    try{

        const orient = await Orientation.findOne({where: {name: name}});
        const candidate = await Candidate.findByPk(idCandidate);

        if(candidate && orient){
            await candidate.addOrientation(orient)
            res.json({msg: "la orientation ya fue relacionada con el candidato"})
        }else{
            res.json({msg: "error"})
        }

    } catch (error){
        next(error)
    }
})

router.delete('/:id', async (req, res, next) => {

    const {id} = req.params;

    
    try{
        const orient = await Orientation.findByPk(id);

        
        if(orient){
            await orient.destroy();
            res.json({msg: "la orientation se elimino correctamente"})
        }else{
                res.json({msg: "la formacion no existe"})

            }
        } catch(error){
            next(error)
       
    }
})


router.delete("/candidate/:candidateId", async (req, res, next) => {
    const {candidateId} = req.params;
    const {name} = req.body;
    try {
        const or = await Orientation.findOne({where: {name: name}});
        const candidate = await Candidate.findByPk(candidateId);
        if(or && candidate){
            await candidate.removeOrientation([or]);
            res.json({msg: `La orientation ${name} fue desvinculada del candidato ${candidate.name} `})
        }else{
            res.json({msg: "La orientation o candidato no existe"})
        }
    } catch (error) {
        next(error)
    }
})


router.put ('/:id', async (req, res, next) => {
    const {id} = req.params;
    const {name} = req.body;
    try {
        const orientation = await Orientation.findByPk(id);
        orientation.name = name;
        await orientation.save();
        res.json({msg: "la orientation se actualizo correctamente"})
    } catch (error) {
        next(error)
    }
})


        
       



module.exports = router;