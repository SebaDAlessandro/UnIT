const express = require('express');
const router = express.Router();


const {Candidate, Formation} = require('../db.js');


router.get('/', async (req, res) => {
    try {
        const formations = await Formation.findAll({
            include: [{
                model: Candidate
                
            }]
        });
        res.json(formations);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

router.post("/", async (req, res, next) => {

    const {title, institution, ubication, status, starting_date, ending_date, description, idCandidate} = req.body;
    try {
        
        const formation = await Formation.create({
            title,
            institution,
            ubication,
            status,
            starting_date,
            ending_date,
            description

        })
        
        if(formation && idCandidate){
            const candidate = await Candidate.findByPk(idCandidate);
            candidate.addFormation(formation);
        }
        res.json({msg: "la formacion se guardo correctamente"})    
    } catch (error) {
        next(error)
    }
})

router.put ('/:id', async (req, res, next) => {
    const {title, institution, ubication, status, starting_date, ending_date, description, idCandidate} = req.body;
    try {
        const formation = await Formation.findByPk(req.params.id);
        if(!formation){
            return res.status(404).json({
                message: "Formacion no encontrada"
            })
        }
        await formation.update({
            title,
            institution,
            ubication,
            status,
            starting_date,
            ending_date,
            description
        })
        // if(formation && idCandidate){
        //     const candidate = await Candidate.findByPk(idCandidate);
        //     candidate.addFormation(formation);
        // }
        res.json({msg: "la formacion se actualizo correctamente"})
    } catch (error) {
        next(error)
    }
})



router.delete("/candidate/:id", async (req, res, next) => {
    const {id} = req.params;
    try {
        const formation = await Formation.findByPk(id);
        if(formation){
            await formation.destroy();

            res.json({msg: "la formacion se elimino correctamente"})
        }else{
            res.json({msg: "la formacion no existe"})
        }
    } catch (error) {
        next(error)
    }
})



module.exports = router;