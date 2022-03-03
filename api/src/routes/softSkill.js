const express = require('express');
const router = express.Router();


const {Candidate, Softskill} = require('../db.js');

router.post("/", async (req, res, next) => {

    const {soft_skill, idCandidate} = req.body;
    try {
        
        const softskills = await Softskill.create({
            soft_skill
        })
        
        if(softskills && idCandidate){
            const candidate = await Candidate.findByPk(idCandidate);
            candidate.addSoftskill(softskills);
        }
        res.json({msg: "la softskill se guardo correctamente"})    
    } catch (error) {
        next(error)
    }
})


router.get('/', async (req, res, next) => {
    try {
        const softskills = await Softskill.findAll({
            include: [
                {model: Candidate}
            ]
        })
        res.json(softskills);
    } catch (error) {
        next(error)
    }
})


router.delete("/:id", async (req, res, next) => {
    const {id} = req.params;
    try {
        const sk = await Softskill.findByPk(id);
        if(sk){
            await sk.destroy();
            res.json({msg: "Su soft skill se elimino correctamente"})
        }else{
            res.json({msg: "La soft skill no existe"})
        }
    } catch (error) {
        next(error)
    }
})

module.exports = router;