const express = require('express');
const router = express.Router();


const {Candidate, Language, Contacted, Technicalskills, Project_experience, Softskill, Orientation, Senorit, Location, Gender, Op} = require('../db.js');

/* router.get("/palabraClave", async (req, res, next) => {
    const {word} = req.body;

    try{
        var candidates = await Candidate.findAll();

        if(candidates){
            let aux = [];
            let description = ""; 
            for(let i=0; i<candidates.length; i++){
                
                let lastname = candidates[i].lastname.toUpperCase();
                let name = candidates[i].name.toUpperCase();
                let email = candidates[i].email.toUpperCase();
                let location = candidates[i].location.toUpperCase();
                if(candidates[i].description){
                    let description = candidates[i].description.toUpperCase();
                }
                

                if( (lastname.search(word.toUpperCase()) !== -1) || (name.search(word.toUpperCase()) !== -1) || (email.search(word.toUpperCase()) !== -1) 
                || (location.search(word.toUpperCase()) !== -1) || (description.search(word.toUpperCase()) !== -1)  ){
                    var a = await Candidate.findByPk(candidates[i].id,{
                        include: [
                            {model: Language}, {model: Contacted}, {model: Technicalskills}, {model: Softskill}, {model: Project_experience}, {model: Orientation}
                        ]
                    })
    
                    if(a){
                        aux.push(a)
                    }
                }
            }
            candidates = aux;
        }

        const contador = candidates.length;
        res.json({contador,candidates})

    } catch (error) {
        next(error)
    }
}) */


router.get("/total", async (req, res, next) => {

    // language, tskill, sskill son arrays [ ] <---- 

    const {name, location, language, tskill, sskill, orientation, senority, gender} = req.body;

    try {

        
        if(location){
            var candidates = await Candidate.findAll({
                include: [
                    {model: Location, where: {location: location}}
                ]
            });

        }else{
            var candidates = await Candidate.findAll();
        }


        if(gender && candidates){
            let aux = [];
            for(let i=0; i<candidates.length; i++){

                var a = await Candidate.findByPk(candidates[i].id,{
                    include: [
                        {model: Gender, where: {gender: gender}}
                    ]
                })

                if(a){
                    aux.push(a)
                }

            }

            candidates = aux;

        }
        

        if(senority && candidates){
            let aux = [];
            for(let i=0; i<candidates.length; i++){

                var a = await Candidate.findByPk(candidates[i].id,{
                    include: [
                        {model: Senorit, where: {senority: senority}}
                    ]
                })

                if(a){
                    aux.push(a)
                }

            }

            candidates = aux;

        }


        if(name && candidates){
            let aux = [];
            let aux2 = [];
            let nameAux = name.toUpperCase().split(" ");

            for(let i=0; i<candidates.length; i++){
                let nm = candidates[i].name.toUpperCase();
                let lnm = candidates[i].lastname.toUpperCase();

                if((name.toUpperCase() == nm + " " + lnm) || (name.toUpperCase() == lnm + " " + nm)){
                    aux2.push(candidates[i])
                }else{
                    let encontrado = false;
                    for(let j=0; j<nameAux.length; j++){
                        if((nm.search(nameAux[j]) !== -1 ) || (lnm.search(nameAux[j]) !== -1)){
                            encontrado = true;
                        }
                    }
                    if (encontrado){
                        aux.push(candidates[i])
                    }                    
                }

            }
            
            if(aux2.length !== 0){
                candidates = aux2
            }else{
                candidates = aux;
            }
            
        }


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
            for(let i=0; i<candidates.length; i++){

                var a = await Candidate.findByPk(candidates[i].id,{
                    include: [
                        {model: Language}, {model: Senorit}, {model: Contacted}, {model: Technicalskills}, {model: Location}, {model: Softskill}, {model: Project_experience}, {model: Orientation, where: {name: orientation}}
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
                            {model: Language}, {model: Senorit}, {model: Contacted}, {model: Technicalskills}, {model: Softskill}, {model: Project_experience}, {model: Orientation}
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