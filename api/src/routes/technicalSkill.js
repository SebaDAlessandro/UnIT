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
})

router.delete("/:id", async (req, res, next) => {
    const {id} = req.params;
    try {
        const tk = await Technicalskills.findByPk(id);
        if(tk){
            await tk.destroy();
            res.json({msg: "Su technical skill se elimino correctamente"})
        }else{
            res.json({msg: "La technical skill no existe"})
        }
    } catch (error) {
        next(error)
    }
})


module.exports = router;