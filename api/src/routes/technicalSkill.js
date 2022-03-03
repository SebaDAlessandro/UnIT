const express = require('express');
const router = express.Router();


const {Candidate, Technicalskills} = require('../db.js');

router.post("/", async (req, res, next) => {

    const {technicalskills, idCandidate} = req.body;
    try {
        
        const ts = await Technicalskills.create({
            technicalskills
        })
        
        if(ts && idCandidate){
            const candidate = await Candidate.findByPk(idCandidate);
            candidate.addTechnicalskills(ts);
        }
        res.json({msg: "la technicalskill se guardo correctamente"})    
    } catch (error) {
        next(error)
    }
})//andres


router.get('/', async (req, res, next) => {
    try {
        const technicalskills = await Technicalskills.findAll({
            include: [
                {model: Candidate}
            ]
        })
        res.json(technicalskills);
    } catch (error) {
        next(error)
    }
})


module.exports = router;