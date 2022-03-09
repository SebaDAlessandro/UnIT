const express = require('express');
const router = express.Router();


const {Candidate, Technicalskills} = require('../db.js');
const { route } = require('./filters.js');

// router.post("/", async (req, res, next) => {

//     const {technicalskills, idCandidate} = req.body;
//     try {
        
//         const ts = await Technicalskills.create({
//             technicalskills
//         })
        
//         if(ts && idCandidate){
//             const candidate = await Candidate.findByPk(idCandidate);
//             candidate.addTechnicalskills(ts);
//         }
//         res.json({msg: "la technicalskill se guardo correctamente"})    
//     } catch (error) {
//         next(error)
//     }
// })


router.post('/', async (req, res, next) => {
    const { technicalskills } = req.body;
    try{
        const [encontrado, creado] = await Technicalskills.findOrCreate({
            where:{technicalskills}})
        if(creado === true){
            res.send(`La habilidad ${technicalskills} fue creada correctamente`)
        }else{
            res.send(`la habilidad ${technicalskills} ya existe`)
        }
       
    }catch(error){
        next(error)
    }
})


router.post('/:candidate', async (req, res, next) => {
    const { candidate } = req.params;
    const { technicalskills } = req.body;

    try{

        const encontrado = await Candidate.findByPk(candidate);
        const tech = await Technicalskills.findOne({
            where:{
                technicalskills: technicalskills
            }
        })

        if(encontrado && tech) {
            await encontrado.addTechnicalskills(tech);
            res.send(`La relacion del candidato ${encontrado.name} y la skill ${tech.technicalskills} se guardo correctamente`)
        }else{
            res.send('Algo salio mal')
        }
    }catch(error){
        next(error);
    }
})




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

router.delete("/candidate/:candidateId", async (req, res, next) => {
    const {candidateId} = req.params;
    const {technicalskills} = req.body;
    try {
        const tk = await Technicalskills.findOne({where: {technicalskills: technicalskills}});
        const candidate = await Candidate.findByPk(candidateId);
        if(tk && candidate){
            await candidate.removeTechnicalskills([tk]);
            res.json({msg: `La technical skill ${technicalskills} fue desvinculada del candidato ${candidate.name} `})
        }else{
            res.json({msg: "La technical skill o candidato no existe"})
        }
    } catch (error) {
        next(error)
    }
})


router.put ('/:id', async (req, res, next) => {
    const {id} = req.params;
    const {technicalskills} = req.body;
    try {
        const ts = await Technicalskills.findByPk(id);
        ts.technicalskills = technicalskills;
        await ts.save();
        res.json({msg: "la technicalskill se actualizo correctamente"})
    } catch (error) {
        next(error)
    }
})


module.exports = router;