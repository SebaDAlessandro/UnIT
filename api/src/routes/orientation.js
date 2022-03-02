const express = require('express');
const router = express.Router();


const {Candidate, Orientation} = require('../db.js');




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


module.exports = router;