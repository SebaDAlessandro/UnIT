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

    const {name, idCandidate} = req.body;
    try {
        
        const or = await Orientation.create({
            name
        })
        
        if(or && idCandidate){
            const candidate = await Candidate.findByPk(idCandidate);
            candidate.addOrientation(or);
        }
        res.json({msg: "la orientation se guardo correctamente"})    
    } catch (error) {
        next(error)
    }
})

router.delete('/candidate/:id', async (req, res, next) => {

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