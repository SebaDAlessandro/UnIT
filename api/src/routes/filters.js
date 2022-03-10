const express = require('express');
const router = express.Router();
const {Op} = require('sequelize');

const {Candidate, Language, Contacted, Technicalskills, Project_experience, Softskill, Orientation} = require('../db.js');


router.get('/location/:location', async(req, res, next) => {
    const {location} = req.params;
    try {
        const candidates = await Candidate.findAll({
            include: [
                {model: Language}, {model: Contacted}, {model: Technicalskills}, {model: Softskill}, {model: Project_experience}, {model: Orientation}
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


router.get('/language/:language', async(req, res, next) => {
    const {language} = req.params;
    try {
        const candidates = await Candidate.findAll({
            include: [
                {model: Language, where: {language: language}}, {model: Contacted}, {model: Technicalskills}, {model: Softskill}, {model: Project_experience}, {model: Orientation}
            ]
        })
        res.send(candidates);
    } catch (error) {
        next(error)
    }
})


// router.get('/Tskill/:tskill', async(req, res, next) => {
//     const {tskill} = req.params;
//     try {
//         const candidates = await Candidate.findAll({
//             include: [
//                 {model: Language}, {model: Contacted}, {model: Technicalskills, where: {technicalskills: tskill}}, {model: Softskill}, {model: Project_experience}, {model: Orientation}
//             ]
//         })
//         res.send(candidates);
//     } catch (error) {
//         next(error)
//     }
// })


// router.get('/Tskill', async (req, res, next) => {
//     const { id } = req.body;
//     try{
//         const candidatos = await Candidate.findAll({
//              where:{
//                 include:[
//                     {model: Technicalskills,
//                         [Op.overlap]: {
//                             id
//                         }
//                     }]
//              }   
//         })
//         res.json(candidatos)
//     }catch(error){
//         next(error)
//     }
// })




router.get('/Sskill/:sskill', async(req, res, next) => {
    const {sskill} = req.params;
    try {
        const candidates = await Candidate.findAll({
            include: [
                {model: Language}, {model: Contacted}, {model: Technicalskills}, {model: Softskill, where: {soft_skill: sskill}}, {model: Project_experience}, {model: Orientation}
            ]
        })
        res.send(candidates);
    } catch (error) {
        next(error)
    }
})


router.get('/Orientation/:orientation', async(req, res, next) => {
    const {orientation} = req.params;
    try {
        const candidates = await Candidate.findAll({
            include: [
                {model: Language}, {model: Contacted}, {model: Technicalskills}, {model: Softskill}, {model: Project_experience}, {model: Orientation, where: {name: orientation}}
            ]
        })
        res.send(candidates);
    } catch (error) {
        next(error)
    }
})



router.get("/total", async (req, res, next) => {
    const {location, language, tskill, sskill, orientation} = req.body;

    try {
        
        if(location){
            var candidates = await Candidate.findAll({ 
                where: {location: location},
                include: [
                    {model: Language}, {model: Contacted}, {model: Technicalskills}, {model: Softskill}, {model: Project_experience}, {model: Orientation}
                ]
            })
        }else{
            var candidates = await Candidate.findAll();
        }

        
        if(language && candidates){
            var aux = [];
            for(let i=0; i<candidates.length; i++){
                
                var a = await Candidate.findByPk(candidates[i].id,{
                    include: [
                        {model: Language, where: {language: language}}, {model: Contacted}, {model: Technicalskills}, {model: Softskill}, {model: Project_experience}, {model: Orientation}
                    ]
                })
                
                if(a){
                    aux.push(a)
                }
                
            }
            
            candidates = aux;
        }

        if(tskill && candidates){
            var aux = [];
            for(let i=0; i<candidates.length; i++){
                
                var a = await Candidate.findByPk(candidates[i].id,{
                    include: [
                        {model: Language}, {model: Contacted}, {model: Technicalskills, where: {[Op.and]: [{technicalskills: tskill}]}}, {model: Softskill}, {model: Project_experience}, {model: Orientation}
                    ]
                })
                
                if(a){
                    aux.push(a)
                }
                
            }
            
            candidates = aux;
        }

        if(sskill && candidates){
            var aux = [];
            console.log(candidates.length)
            for(let i=0; i<candidates.length; i++){
                
                var a = await Candidate.findByPk(candidates[i].id,{
                    include: [
                        {model: Language}, {model: Contacted}, {model: Technicalskills}, {model: Softskill, where: {soft_skill: sskill}}, {model: Project_experience}, {model: Orientation}
                    ]
                })
                
                if(a){
                    aux.push(a)
                }
                
            }
            
            candidates = aux;
        }

        if(orientation && candidates){
            var aux = [];
            console.log(candidates.length)
            for(let i=0; i<candidates.length; i++){
                
                var a = await Candidate.findByPk(candidates[i].id,{
                    include: [
                        {model: Language}, {model: Contacted}, {model: Technicalskills}, {model: Softskill}, {model: Project_experience}, {model: Orientation, where: {name: orientation}}
                    ]
                })
                
                if(a){
                    aux.push(a)
                }
                
            }
            
            candidates = aux; 
        }
        
        const contador = candidates.length;

        res.json({contador,candidates})
    } catch (error) {
        next(error)
    }
})


module.exports = router;

module.exports = router;