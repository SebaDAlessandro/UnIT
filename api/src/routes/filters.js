const express = require('express');
const router = express.Router();

const {Candidate, Language, Contacted, Technicalskills, Project_experience, Softskill} = require('../db.js');


router.get('/:location', async(req, res, next) => {
    const {location} = req.params;
    try {
        const candidates = await Candidate.findAll({
            include: [
                {model: Language}, {model: Contacted}, {model: Technicalskills}, {model: Softskill}, {model: Project_experience}
            ],
            where: {
                location: location
            }
        })
        res.send(candidates);
    } catch (error) {
        next(error)
    }
})

module.exports = router;