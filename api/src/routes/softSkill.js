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

module.exports = router;