const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');

const {Candidate, Language, Contacted, Technicalskills, Project_experience, Softskill} = require('../db.js');


router.get('/', async(req, res, next) => {
    try {
        const candidates = await Candidate.findAll({
            include: [
                {model: Language}, {model: Contacted}, {model: Technicalskills}, {model: Softskill}, {model: Project_experience}
            ]
        })
        res.json(candidates);
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    const {name, lastname, email, location, status, image, password} = req.body;

    const passwords = await bcryptjs.hash(password, 10);

    try {
        const candidate = await Candidate.create({
            name,
            lastname,
            email,
            location,
            status,
            image,
            password: passwords
        })
        res.json({msg: "el candidato se guardo correctamente"})    
    } catch (error) {
        res.send(error)
        
    }
})






module.exports = router;
