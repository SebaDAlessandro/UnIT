const express = require('express');
const router = express.Router();


const {Candidate, Gender} = require('../db.js');


router.get('/', async (req, res, next) => {
    try {
        const genders = await Gender.findAll();
        if(genders.length > 0){
            res.json(genders);
        }else{
            const genders = [{gender: "Femenino" }, {gender: "Masculino"},{gender:"No Binario"}, {gender:"Otro"}, {gender:"No Contesta"}];
            const generos = await Gender.bulkCreate(genders);
            res.json(generos);
        }
    } catch (error) {
        next(error)
    }
});


router.post("/:idCandidate", async (req, res, next) => {

    const {gender} = req.body;
    const {idCandidate} = req.params;
    try {
        
        if(gender && idCandidate){
            const genero = await Gender.findOne({where: {gender: gender}});            
            const candidate = await Candidate.findByPk(idCandidate);
            
            await genero.addCandidate(candidate);
        }
        res.json({msg: "el genero se relaciono correctamente"})    
    } catch (error) {
        next(error)
    }
})





module.exports = router;