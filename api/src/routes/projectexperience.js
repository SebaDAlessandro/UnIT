const express = require('express');
const router = express.Router();

const {Candidate, Project_experience} = require('../db.js');

router.get('/:id', async (req, res, next) => {
    const {id} = req.params;
    
    try{
        const experiences = await Candidate.findByPk(id,{
            include: [
                {model: Project_experience}
            ]
        })
        if(experiences !== 0){
            res.status(200).json({experiences})
        }else{
            res.status(404).json({message: 'Cargue una experiencia'})
        }
    }catch(err){
        next(err);
    }
})

router.post('/', async (req, res, next)=> {
    const {
        idCandidate,
        position,
        organization_name,
        location,
        starting_date,
        ending_date,
        status,
        description
    } = req.body;
    
    try {
        const project = await Project_experience.create({
            position,
            organization_name,
            location,
            starting_date,
            ending_date,
            status,
            description
            })

            if(project && idCandidate){
                const candidate = await Candidate.findByPk(idCandidate);
                candidate.addProject_experience(project);
            }
        
        res.json(`El proyecto o experiencia fue cargado correctamente`)    
    } catch (error) {
        next(error)
    }
})

router.delete("/candidate/:id", async (req, res, next) => {
    const {id} = req.params;
    try {
        const proExperience = await Project_experience.findByPk(id);
        if(proExperience){
            await proExperience.destroy();
            res.json({msg: "Su experiencia se elimino correctamente"})
        }else{
            res.json({msg: "La experiencia no existe"})
        }
    } catch (error) {
        next(error)
    }
})

module.exports = router;