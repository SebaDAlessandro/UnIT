const express = require('express');
const router = express.Router();


const {Candidate, Softskill} = require('../db.js');

router.post("/", async (req, res, next) => {

    const {soft_skill} = req.body;

    try{
        
        const [s, creado] = await Softskill.findOrCreate({
            where: {soft_skill: soft_skill}
        })
       

        if(!creado){
            res.json({msg: "la softskill ya existe"})
        }else{
            res.json({msg: "la softskill fue creada correctamente"})
        }

    } catch (error){
        next(error)
    }

})


router.post("/:idCandidate", async (req, res, next) => {
    const {idCandidate} = req.params;
    const {soft_skill} = req.body;

    try{

        const softskill = await Softskill.findOne({where: {soft_skill: soft_skill}});
        const candidate = await Candidate.findByPk(idCandidate);

        if(candidate && softskill){
            await candidate.addSoftskill(softskill)
            res.json({msg: "la softskill ya fue relacionada con el candidato"})
        }else{
            res.json({msg: "error"})
        }

    } catch (error){
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

router.put('/:id', async (req, res, next) => {
    const {id} = req.params;
    const {soft_skill} = req.body;
    try {
        const softskill = await Softskill.findByPk(id);
        softskill.soft_skill = soft_skill;
        await softskill.save();
        res.json({msg: "la softskill se actualizo correctamente"})
    } catch (error) {
        next(error)
    }
})

module.exports = router;