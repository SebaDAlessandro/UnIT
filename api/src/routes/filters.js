const express = require('express');
const router = express.Router();


const {Candidate, Language, Contacted, Technicalskills, Project_experience, Softskill, Orientation, Op} = require('../db.js');



router.get("/total", async (req, res, next) => {

    // language, tskill, sskill son arrays [ ] <---- 

    const {name, location, language, tskill, sskill, orientation} = req.body;

    try {

        if(location){
            var candidates = await Candidate.findAll({
                where: {location: location},
            })
        }else{
            var candidates = await Candidate.findAll();
        }

        //filtrador por name en proceso!! <-----

        // if(name && candidates){
        //     let aux = [];
        //     console.log("hola")
        //     for(let i=0; i<candidates.length; i++){
                
        //      let flag = candidates[i].name.toUpperCase()
        //      let expresion = /(`${name}` \d+(\.\d)*)/i;
        //         if(flag.match(expresion)){
        //             aux.push(candidates[i])
        //         }
                
        //     }
        //     candidates = aux;

        // }


        if(language && candidates){
            let aux = [];
            for(let i=0; i<candidates.length; i++){

                var a = await Candidate.findByPk(candidates[i].id,{
                    include: [
                        {model: Language, where: {language: language}}
                    ]
                })

                if(a){
                    aux.push(a)
                }

            }
            
            candidates = aux.filter(f => {
                return f.languages.length === language.length
             })
             console.log(candidates)
        }

        if(tskill && candidates){
            let aux = [];
            for(let i=0; i<candidates.length; i++){

                var a = await Candidate.findByPk(candidates[i].id,{
                    include: [
                       {model: Technicalskills, where: {technicalskills: tskill}}
                    ]
                })

                if(a){
                    aux.push(a)
                }

            }
         
            candidates = aux.filter(f => {
               return f.technicalskills.length === tskill.length
            })
        }

        if(sskill && candidates){
            let aux = [];
            console.log(candidates.length)
            for(let i=0; i<candidates.length; i++){

                var a = await Candidate.findByPk(candidates[i].id,{
                    include: [
                       {model: Softskill, where: {soft_skill: sskill}}
                    ]
                })

                if(a){
                    aux.push(a)
                }

            }

            candidates = aux.filter(f => {
                return f.softskills.length === sskill.length
             })
        }

        if(orientation && candidates){
            let aux = [];
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

        }else{
             if(candidates){
                let aux = [];
                
                for(let i=0; i<candidates.length; i++){
    
                    var a = await Candidate.findByPk(candidates[i].id,{
                        include: [
                            {model: Language}, {model: Contacted}, {model: Technicalskills}, {model: Softskill}, {model: Project_experience}, {model: Orientation}
                        ]
                    })
    
                    if(a){
                        aux.push(a)
                    }
                }
                candidates = aux;
             }
        }

        const contador = candidates.length;

        res.json({contador,candidates})
    } catch (error) {
        next(error)
    }
})


module.exports = router;

module.exports = router;